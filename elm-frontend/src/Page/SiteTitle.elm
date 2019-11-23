module Page.SiteTitle exposing (viewSiteTitle)


import Html exposing (Html, header, h1, text)


viewSiteTitle : Html msg
viewSiteTitle =
    header [] [
        h1 [] [text "Simple Repository Search"]
    ]
