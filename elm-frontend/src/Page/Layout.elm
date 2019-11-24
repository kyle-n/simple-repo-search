module Page.Layout exposing (viewPageLayout)


import Html exposing (Html, div, section, text)
import Html.Attributes exposing (class)
import Page.Title as SiteTitle
import Page.Footer as SiteFooter
import Input.Layout as InputLayout
import Results.Layout as ResultsLayout
import Types exposing (Msg(..)
    , Sort(..)
    , Direction(..)
    , Model)


viewPageLayout : Model -> Html Msg
viewPageLayout model =
    div [ class "container" ]
        [ viewSiteTitle
        , viewSearchArea model
        , viewFooter
        ]


viewSiteTitle : Html msg
viewSiteTitle =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteTitle.viewSiteTitle ]
        ]


viewSearchArea : Model -> Html Msg
viewSearchArea model =
    section [ class "row" ]
        [ InputLayout.viewSearchInput model
        , ResultsLayout.viewLayout model.results
        ]


viewFooter : Html msg
viewFooter =
    section [ class "row" ]
        [ div [ class "col s12" ] [ SiteFooter.viewFooter ] ]
