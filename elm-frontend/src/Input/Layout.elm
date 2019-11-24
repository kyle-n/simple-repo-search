module Input.Layout exposing (viewSearchInput)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Input.InputBox as InputBox
import Types exposing (Msg(..)
    , Sort(..)
    , Direction(..)
    , Model)
import Input.Filters exposing (viewSortByFilter, viewDirectionButton)


viewSearchInput : Model -> Html Msg
viewSearchInput model =
    div [ class "row" ]
        [ div [ class "col s6" ] [ InputBox.viewSearchInput model.query ]
        , div [ class "col s4" ] [ viewSortByFilter model.sort ]
        , div [ class "col s2" ] [ viewDirectionButton model.direction ]
        ]
