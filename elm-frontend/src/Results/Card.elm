module Results.Card exposing (viewCard)

import Html exposing (Html, a, br, div, img, p, text, h2, span, i)
import Html.Attributes exposing (alt, class, href, src, style, target)
import Time
import Types exposing (Repo, posixToFormattedDate, emptyHtml)


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
    , viewCardDescription repo.description
    , br [] []
    , p [] [ text <| "Created at: " ++ posixToFormattedDate repo.createdAt ]
    , viewUpdatedAt repo.updatedAt
    ]


viewCardDescription : Maybe String -> Html msg
viewCardDescription maybeDescription =
    case maybeDescription of
        Just description ->
            p [] [ text description ]
        Nothing ->
            emptyHtml


viewCardHeader : Repo -> Html msg
viewCardHeader repo =
    div []
        [ div
            [ class "row"
            , class "valign-wrapper"
            ]
            [ div
                [ class "col s3" ]
                [ viewOwnerAvatar repo.owner.avatarUrl repo.owner.login ]
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
            [ div
                [ class "col s2 l1"
                , class "offset-s4 offset-l5"
                , style "display" "flex"
                , style "flex-direction" "column"
                , style "align-items" "center"
                ]
                [ i [ class "material-icons" ] [ text "star" ]
                , span [] [ text <| String.fromInt repo.stars ]
                ]
            , div
                [ class "col s2 l1"
                , style "display" "flex"
                , style "flex-direction" "column"
                , style "align-items" "center"
                ]
                [ i [ class "material-icons" ] [ text "insert_emoticon" ]
                , span [] [ text <| String.slice 0 5 <| String.fromFloat repo.score ]
                ]
            , div [ class "col s4" ] []
            ]
        ]


viewOwnerAvatar : Maybe String -> String -> Html msg
viewOwnerAvatar url login =
    case url of
        Just avatarUrl ->
            img
                [ src avatarUrl
                , alt login
                , class "circle"
                , class "responsive-img"
                ]
                []
        Nothing ->
            emptyHtml


viewUpdatedAt : Maybe Time.Posix -> Html msg
viewUpdatedAt time =
    case time of
        Just updatedAt ->
            p [] [ text <| "Updated at: " ++ posixToFormattedDate updatedAt ]
        Nothing ->
            emptyHtml
