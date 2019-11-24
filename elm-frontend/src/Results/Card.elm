module Results.Card exposing (viewCard)

import Html exposing (Html, a, br, div, img, p, text, h2)
import Html.Attributes exposing (alt, class, href, src, style, target)
import Time
import Types exposing (Repo, posixToFormattedDate)


viewCard : Repo -> Html msg
viewCard repo =
    div [ class "col s12 m6" ]
        [ div
            [ class "card"
            , class "blue darken-2"
            ]
            [ div
                [ class "card-content"
                , class "white-text"
                ]
                (viewCardContent repo)
            , div
                [ class "card-action"
                , class "right-align"
                ]
                [ a
                    [ target "_blank"
                    , href repo.htmlUrl
                    , style "margin-right" "0"
                    ]
                    [ text "Details" ]
                ]
            ]
        ]


viewCardContent : Repo -> List (Html msg)
viewCardContent repo =
    [ viewCardHeader repo.name repo.owner.login repo.owner.avatarUrl
    , p [] [ text repo.description ]
    , br [] []
    , p [] [ text <| "Created at: " ++ posixToFormattedDate repo.createdAt ]
    , p [] [ text <| "Updated at: " ++ posixToFormattedDate repo.updatedAt ]
    ]


viewCardHeader : String -> String -> String -> Html msg
viewCardHeader name owner avatarUrl =
    div
        [ class "row"
        , class "valign-wrapper"
        ]
        [ div
            [ class "col s3"
            ]
            [ img
                [ src avatarUrl
                , alt owner
                , class "circle"
                , class "responsive-img"
                ]
                []
            ]
        , div
            [ class "col s9"
            , style "height" "100%"
            , class "card-header"
            ]
            [ h2 [ style "font-size" "2rem" ] [ text name ]
            ]
        ]
