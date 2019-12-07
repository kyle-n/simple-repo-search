module SimpleRepoSearch exposing (main)

import Browser
import Html exposing (..)
import Types exposing (..)
import Page.Layout as Layout
import Api
import Http
import Debounce


initialModel : Model
initialModel =
    { query = ""
    , debouncedSearch = Debounce.init
    , sort = Score
    , direction = Desc
    , isLoading = False
    , results = []
    }


debounceConfig : Debounce.Config Msg
debounceConfig =
    { strategy = Debounce.later (2 * 1000)
    , transform = SearchGithub
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
            updateQuery model newQuery

        ToggleDirection ->
            ( updateDirection model
            , Cmd.none
            )

        SetSort newSort ->
            ( { model | sort = newSort }
            , Cmd.none
            )

        SearchGithub query ->
            let
                (debounce, cmd) =
                    Debounce.update
                        debounceConfig
                        (Debounce.takeLast Api.searchRepos)
                        query
                        model.debouncedSearch
            in
            ( { model | debouncedSearch = debounce, isLoading = True }
            , cmd
            )

        SetResults resp ->
            updateResults model resp


updateQuery : Model -> String -> (Model, Cmd Msg)
updateQuery model newQuery =
    case String.length newQuery of
        0 ->
            ( { model | query = newQuery }
            , Cmd.none
            )

        _ ->
            let
                (debounce, cmd) =
                    Debounce.push debounceConfig newQuery model.debouncedSearch
            in
            ( { model | debouncedSearch = debounce
                , query = newQuery
            }
            , cmd
            )


updateResults : Model -> Result Http.Error GitHubResponse -> (Model, Cmd Msg)
updateResults model resp =
    case resp of
        Ok ghResp ->
            ( { model | results = ghResp.items, isLoading = False }
            , Cmd.none
            )
        Err _ ->
            ( { model | isLoading = False }
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
