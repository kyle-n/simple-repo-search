module Page.Layout exposing (viewPageLayout)


import Html exposing (Html, div, section, text)
import Html.Attributes exposing (class)
import Page.Title as SiteTitle
import Page.Footer as SiteFooter
import Input.Layout as InputLayout


viewPageLayout : String -> Html msg
viewPageLayout query =
    div [ class "container" ]
        [ viewSiteTitle
        , viewSearchArea query
        , text <| "Query" ++ query
        , viewFooter
        ]


viewSiteTitle : Html msg
viewSiteTitle =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteTitle.viewSiteTitle ]
        ]


viewSearchArea : String -> Html msg
viewSearchArea query =
    section [ class "row" ]
        [ InputLayout.viewSearchInput query ]


viewFooter : Html msg
viewFooter =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteFooter.viewFooter ] ]
