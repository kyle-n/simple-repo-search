module Input.InputBox exposing (viewSearchFormControl)


import Html exposing (Html, div, input, label, text)
import Html.Attributes exposing (type_, value, id, class, for, autofocus, style)
import Html.Events exposing (onInput)
import Types exposing (Msg (..), emptyHtml)


searchInputName : String
searchInputName =
    "repo-search-input"


spinnerSize : String
spinnerSize =
    "2rem"


viewSearchFormControl : String -> Bool -> Html Msg
viewSearchFormControl query isLoading =
    div [ style "display" "flex" ]
        [ viewSearchInput query
        , viewLoading isLoading
        ]

viewSearchInput : String -> Html Msg
viewSearchInput query =
    div
        [ class "input-field"
        , style "flex-grow" "1"
        ]
        [ label [ for searchInputName ] [ text "Search repositories" ]
        , input [ type_ "text"
            , autofocus True
            , value query
            , id searchInputName
            , onInput SetQuery
            ] []
        ]


viewLoading : Bool -> Html msg
viewLoading isLoading =
    case isLoading of
        True ->
            div
                [ class "preloader-wrapper"
                , class "small"
                , class "active"
                , style "width" spinnerSize
                , style "height" spinnerSize
                , style "margin-left" ("-" ++ spinnerSize)
                , style "align-self" "center"
                ]
                [ div
                    [ class "spinner-layer"
                    , class "spinner-red-only"
                    ]
                    [ div
                        [ class "circle-clipper"
                        , class "left"
                        ]
                        [ circleDiv ]
                    , div
                        [ class "gap-patch" ]
                        [ circleDiv ]
                    , div
                        [ class "circle-clipper"
                        , class "right"
                        ]
                        [ circleDiv ]
                    ]
                ]
        False ->
            emptyHtml


circleDiv : Html msg
circleDiv =
    div [ class "circle" ] []
