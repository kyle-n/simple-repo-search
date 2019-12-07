module Api exposing (searchRepos)


import Json.Decode exposing (Decoder, succeed, nullable)
import Json.Decode.Pipeline exposing (required)
import Http
import Url.Builder
import Iso8601
import Types exposing (GitHubResponse, Repo, Owner, Msg (..))


searchRepos : String -> Cmd Msg
searchRepos query =
    let
        apiUrl = Url.Builder.relative
            [ "api", "github", "search" ]
            [ Url.Builder.string "q" query ]
    in
    Http.get
        { url = apiUrl
        , expect = Http.expectJson SetResults githubDecoder
        }


githubDecoder : Decoder GitHubResponse
githubDecoder =
    succeed GitHubResponse
        |> required "total_count" Json.Decode.int
        |> required "incomplete_results" Json.Decode.bool
        |> required "items" (Json.Decode.list repoDecoder)


repoDecoder : Decoder Repo
repoDecoder =
    succeed Repo
        |> required "archived" Json.Decode.bool
        |> required "created_at" Iso8601.decoder
        |> required "description" Json.Decode.string
        |> required "html_url" Json.Decode.string
        |> required "id" Json.Decode.int
        |> required "name" Json.Decode.string
        |> required "owner" ownerDecoder
        |> required "score" Json.Decode.float
        |> required "stargazers_count" Json.Decode.int
        |> required "updated_at" (nullable Iso8601.decoder)


ownerDecoder : Decoder Owner
ownerDecoder =
    succeed Owner
        |> required "avatar_url" (nullable Json.Decode.string)
        |> required "html_url" Json.Decode.string
        |> required "login" Json.Decode.string
