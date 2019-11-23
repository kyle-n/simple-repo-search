module Page.Footer exposing (viewFooter)

import Html exposing (Html, a, footer, hr, text)
import Html.Attributes exposing (class, href, style, target)


viewFooter : Html msg
viewFooter =
    footer [ class "center-align"]
        [ hr [ style "border-width" "1px"
            , style "color" "lightgray"
            ] []
        , text "Created by "
        , a
            [ href "https://github.com/kyle-n/simple-repo-search"
            , target "_blank"
            ]
            [ text "Kyle Nazario" ]
        , text "."
        ]
