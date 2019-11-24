module SimpleRepoSearch exposing (main)

import Browser
import Html exposing (..)
import Types exposing (..)
import Page.Layout as Layout



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
    Layout.viewPageLayout model.query model.sort model.direction


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        SetQuery newQuery ->
            ( { model | query = newQuery }
            , Cmd.none
            )
        ToggleDirection ->
            ( updateDirection model
            , Cmd.none
            )
        SetSort newSort ->
            ( { model | sort = newSort }
            , Cmd.none
            )


updateDirection : Model -> Model
updateDirection model =
    case model.direction of
        Asc ->
            { model | direction = Desc }
        Desc ->
            { model | direction = Asc }


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
