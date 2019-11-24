module Page.Layout exposing (viewPageLayout)


import Html exposing (Html, div, section, text)
import Html.Attributes exposing (class)
import Page.Title as SiteTitle
import Page.Footer as SiteFooter
import Input.Layout as InputLayout
import Types exposing (Msg(..)
    , Sort(..))


viewPageLayout : String -> Sort -> Html Msg
viewPageLayout currentQuery currentSort =
    div [ class "container" ]
        [ viewSiteTitle
        , viewSearchArea currentQuery currentSort
        , viewFooter
        ]


viewSiteTitle : Html msg
viewSiteTitle =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteTitle.viewSiteTitle ]
        ]


viewSearchArea : String -> Sort -> Html Msg
viewSearchArea currentQuery currentSort =
    section [ class "row" ]
        [ InputLayout.viewSearchInput currentQuery currentSort ]


viewFooter : Html msg
viewFooter =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteFooter.viewFooter ] ]
