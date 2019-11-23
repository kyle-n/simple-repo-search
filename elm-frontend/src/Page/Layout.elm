module Page.Layout exposing (pageLayout)


import Html exposing (..)
import Html.Attributes exposing (class)
import Page.SiteTitle as SiteTitle


pageLayout : Html msg
pageLayout =
    div [ class "container" ]
        [ SiteTitle.viewSiteTitle
        , text "hello there"
        ]
