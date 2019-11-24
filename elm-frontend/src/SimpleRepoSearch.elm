module SimpleRepoSearch exposing (main)

import Browser
import Html exposing (..)
import Types exposing (..)
import Page.Layout as Layout
import Time


sampleRepo : Repo
sampleRepo =
    { archived = False
    , createdAt = Time.millisToPosix 1528458464000
    , description = "test description"
    , htmlUrl = "https://github.com/tessy2728/QRXchange"
    , id = 136612051
    , name = "QRXchange"
    , owner = { avatarUrl = "https://avatars1.githubusercontent.com/u/19467909?v=4"
        , htmlUrl = "https://github.com/tessy2728"
        , login = "tessy2728"
    }
    , score = 20.319965
    , stars = 0
    , updatedAt = Time.millisToPosix 1528458464000
    }


initialModel : Model
initialModel =
    { query = ""
    , sort = Score
    , direction = Desc
    , isLoading = False
    , results = [ sampleRepo, sampleRepo, sampleRepo ]
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
