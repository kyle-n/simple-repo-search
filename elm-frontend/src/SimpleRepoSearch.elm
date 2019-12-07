module SimpleRepoSearch exposing (main)

import Browser
import Html exposing (..)
import Types exposing (..)
import Page.Layout as Layout
import Api
import Http


initialModel : Model
initialModel =
    { query = ""
    , sort = Score
    , direction = Desc
    , isLoading = False
    , results = []
    }


init : flags -> (Model, Cmd msg)
init flags =
    ( initialModel, Cmd.none )


view : Model -> Html Msg
view model =
    Layout.viewPageLayout model


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        SetQuery newQuery ->
            ( { model | query = newQuery }
            , Api.searchRepos newQuery
            )
        ToggleDirection ->
            ( updateDirection model
            , Cmd.none
            )
        SetSort newSort ->
            ( { model | sort = newSort }
            , Cmd.none
            )
        SetResults resp ->
            updateResults model resp


updateResults : Model -> Result Http.Error GitHubResponse -> (Model, Cmd Msg)
updateResults model resp =
    case resp of
        Ok ghResp ->
            ( { model | results = ghResp.items }
            , Cmd.none
            )
        Err _ ->
            ( model
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
