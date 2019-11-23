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
    text ("Qlength: " ++ (String.length model.query |> String.fromInt) )


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
