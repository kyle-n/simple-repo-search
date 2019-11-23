module Input.Layout exposing (viewSearchInput)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Input.InputBox as InputBox


viewSearchInput : String -> Html msg
viewSearchInput query =
    div [ class "row" ]
        [ div [ class "col s6" ] [ InputBox.viewSearchInput query ]
        , div [ class "col s6" ] [ text "filters" ]
        ]