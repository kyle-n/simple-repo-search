module ElmFrontend exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, disabled, placeholder, src, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)


type Msg
    = SetInput String
    | ToggleDirection
    | SetSort


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
    , isLoading: Bool
    }
