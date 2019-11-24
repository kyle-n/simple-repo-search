module Types exposing (..)

import Time

type Msg
    = SetQuery String
    | ToggleDirection
    | SetSort Sort


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


directionToIconName : Direction -> String
directionToIconName direction =
    case direction of
        Asc ->
            "arrow_upward"
        Desc ->
            "arrow_downward"


type alias Owner =
    { avatarUrl : String
    , htmlUrl : String
    , login : String
    }


type alias Repo =
    { archived : Bool
    , createdAt : Time.Posix
    , description : String
    , htmlUrl : String
    , id : Int
    , name : String
    , owner : Owner
    , score : Float
    , stars : Int
    , updatedAt : Time.Posix
    }


type alias GitHubResponse =
    { incompleteResults : Bool
    , items : List Repo
    , totalCount : Int
    }


type alias Model =
    { query : String
    , sort : Sort
    , direction : Direction
    , isLoading : Bool
    , results : List Repo
    }

