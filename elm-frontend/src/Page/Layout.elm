module Page.Layout exposing (viewPageLayout)


import Html exposing (..)
import Html.Attributes exposing (class, href, target)
import Page.SiteTitle as SiteTitle


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
        [ footer []
            [ text "Created by "
            , a [ href "https://github.com/kyle-n/simple-repo-search"
                , target "_blank"
                ] [ text "Kyle Nazario" ]
            ]
            , text "."
        ]
