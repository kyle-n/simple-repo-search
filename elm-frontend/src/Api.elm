module Api exposing (searchRepos)


import Json.Decode exposing (Decoder, succeed, null, nullable)
import Json.Decode.Pipeline exposing (required, optional)
import Http
import Time
import Iso8601
import Types exposing (GitHubResponse, Repo, Owner, Msg (..))


searchRepos : String -> Cmd Msg
searchRepos query =
    Http.get
        { url = "/api/github/search?q=" ++ query
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
        |> required "stargazer_count" Json.Decode.int
        |> required "updated_at" (nullable Iso8601.decoder)


ownerDecoder : Decoder Owner
ownerDecoder =
    succeed Owner
        |> required "avatar_url" (nullable Json.Decode.string)
        |> required "html_url" Json.Decode.string
        |> required "login" Json.Decode.string
