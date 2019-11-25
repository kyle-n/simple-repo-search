module Results.Card exposing (viewCard)

import Html exposing (Html, a, br, div, img, p, text, h2, span, i)
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
    [ viewCardHeader repo
    , p [] [ text repo.description ]
    , br [] []
    , p [] [ text <| "Created at: " ++ posixToFormattedDate repo.createdAt ]
    , p [] [ text <| "Updated at: " ++ posixToFormattedDate repo.updatedAt ]
    ]


viewCardHeader : Repo -> Html msg
viewCardHeader repo =
    div []
        [ div
            [ class "row"
            , class "valign-wrapper"
            ]
            [ div
                [ class "col s3" ]
                [ img
                    [ src repo.owner.avatarUrl
                    , alt repo.owner.login
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
                [ h2 [ style "font-size" "2rem" ] [ text repo.name ]
                , p [] [ text repo.owner.login ]
                ]
            ]
        , div
            [ class "row"
            , class "valign-wrapper"
            , class "right-align"
            ]
            [ div [ class "col s5" ] []
            , div
                [ class "col s1"
                , style "display" "flex"
                , style "flex-direction" "column"
                , style "align-items" "center"
                ]
                [ i [ class "material-icons" ] [ text "star" ]
                , span [] [ text <| String.fromInt repo.stars ]
                ]
            , div
                [ class "col s1"
                , style "display" "flex"
                , style "flex-direction" "column"
                , style "align-items" "center"
                ]
                [ i [ class "material-icons" ] [ text "insert_emoticon" ]
                , span [] [ text <| String.slice 0 5 <| String.fromFloat repo.score ]
                ]
            , div [ class "col s5" ] []
            ]
        ]
