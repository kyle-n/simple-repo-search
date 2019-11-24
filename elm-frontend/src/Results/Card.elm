module Results.Card exposing (viewCard)


import Html exposing (Html, div, text, p, a)
import Html.Attributes exposing (class, href, target, style)
import Types exposing (Repo)


viewCard : Repo -> Html msg
viewCard repo =
    div [ class "col s12 m6"]
        [ div [ class "card"
            , class "blue darken-2"
            ]
            [ div [ class "card-content"
                , class "white-text"
                ]
                [ p [ class "card-title" ] [ text repo.name ]
                , p [] [ text repo.description ]
                ]
            , div [ class "card-action"
                , class "right-align"
                ]
                [ a [ target "_blank"
                    , href repo.htmlUrl
                    , style "margin-right" "0"
                    ]
                    [ text "Details"]
                ]
            ]
        ]