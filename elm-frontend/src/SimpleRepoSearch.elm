module SimpleRepoSearch exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, disabled, placeholder, src, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)


import Page.Layout as Layout


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

initialModel : Model
initialModel =
    { query = ""
    , sort = Score
    , direction = Desc
    , isLoading = False
    }


init : flags -> (Model, Cmd msg)
init flags =
    ( initialModel, Cmd.none )


view : Model -> Html Msg
view model =
    Layout.pageLayout


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
