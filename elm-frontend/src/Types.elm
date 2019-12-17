module Types exposing (..)

import Html exposing (Html, text)
import Time
import Strftime
import Http
import Debounce


emptyHtml : Html msg
emptyHtml =
    text ""


type Msg
    = SetQuery String
    | ToggleDirection
    | SetSort Sort
    | SetResults (Result Http.Error GitHubResponse)
    | SearchGithub Debounce.Msg


type Sort
    = Score
    | Stars
    | Updated


sortToString : Sort -> String
sortToString sort =
    case sort of
        Score ->
            "Score"
        Stars ->
            "Stars"
        Updated ->
            "Updated"


stringToSort : String -> Sort
stringToSort str =
    case String.toLower str of
        "stars" ->
            Stars
        "updated" ->
            Updated
        _ ->
            Score


type Direction
    = Asc
    | Desc


directionToString : Direction -> String
directionToString dir =
    case dir of
        Asc ->
            "asc"
        Desc ->
            "desc"


directionToIconName : Direction -> String
directionToIconName direction =
    case direction of
        Asc ->
            "arrow_upward"
        Desc ->
            "arrow_downward"


type alias Owner =
    { avatarUrl : Maybe String
    , htmlUrl : String
    , login : String
    }


type alias Repo =
    { archived : Bool
    , createdAt : Time.Posix
    , description : Maybe String
    , htmlUrl : String
    , id : Int
    , name : String
    , owner : Owner
    , score : Float
    , stars : Int
    , updatedAt : Maybe Time.Posix
    }


type alias GitHubResponse =
    { totalCount: Int
    , incompleteResults : Bool
    , items : List Repo
    }


type alias Model =
    { debouncedSearch : Debounce.Debounce String
    , query : String
    , sort : Sort
    , direction : Direction
    , isLoading : Bool
    , results : List Repo
    }


posixToFormattedDate : Time.Posix -> String
posixToFormattedDate posix =
    Strftime.format "%B %d %Y, %-I:%M" Time.utc posix
