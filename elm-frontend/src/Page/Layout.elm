module Page.Layout exposing (viewPageLayout)


import Html exposing (Html, div, section, text)
import Html.Attributes exposing (class)
import Page.Title as SiteTitle
import Page.Footer as SiteFooter
import Input.Layout as InputLayout
import Types exposing (Msg(..)
    , Sort(..)
    , Direction(..))


viewPageLayout : String -> Sort -> Direction -> Html Msg
viewPageLayout query sort direction =
    div [ class "container" ]
        [ viewSiteTitle
        , viewSearchArea query sort direction
        , text <| "Direction" ++ Debug.toString direction
        , viewFooter
        ]


viewSiteTitle : Html msg
viewSiteTitle =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteTitle.viewSiteTitle ]
        ]


viewSearchArea : String -> Sort -> Direction -> Html Msg
viewSearchArea query sort direction =
    section [ class "row" ]
        [ InputLayout.viewSearchInput query sort direction ]


viewFooter : Html msg
viewFooter =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteFooter.viewFooter ] ]
