module Page.Layout exposing (viewPageLayout)


import Html exposing (Html, div, section, text)
import Html.Attributes exposing (class)
import Page.Title as SiteTitle
import Page.Footer as SiteFooter


viewPageLayout : Html msg
viewPageLayout =
    div [ class "container" ]
        [ viewSiteTitle
        , viewSearchArea
        , viewFooter
        ]


viewSiteTitle : Html msg
viewSiteTitle =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteTitle.viewSiteTitle ]
        ]


viewSearchArea : Html msg
viewSearchArea =
    section [ class "row" ]
        [ text "search area" ]


viewFooter : Html msg
viewFooter =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteFooter.viewFooter ] ]
