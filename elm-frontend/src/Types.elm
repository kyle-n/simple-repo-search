module Types exposing (..)

type Msg
    = SetQuery String
    | ToggleDirection
    | SetSort Sort


type Sort
    = Score
    | Stars
    | Updated


type Direction
    = Asc
    | Desc


type alias Model =
    { query : String
    , sort : Sort
    , direction : Direction
    , isLoading : Bool
    }
