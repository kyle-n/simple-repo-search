module Input.Layout exposing (viewSearchInput)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Input.InputBox as InputBox
import Types exposing (Msg(..)
    , Sort(..))
import Input.Filters exposing (viewSortByFilter)


viewSearchInput : String -> Sort -> Html Msg
viewSearchInput currentQuery currentSort =
    div [ class "row" ]
        [ div [ class "col s6" ] [ InputBox.viewSearchInput currentQuery ]
        , div [ class "col s6" ] [ viewSortByFilter currentSort ]
        ]
