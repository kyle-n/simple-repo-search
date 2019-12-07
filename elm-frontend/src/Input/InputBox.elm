module Input.InputBox exposing (viewSearchInput)


import Html exposing (Html, div, input, label, text)
import Html.Attributes exposing (type_, value, id, class, for, autofocus)
import Html.Events exposing (onInput)
import Types exposing (Msg (..), emptyHtml)


searchInputName : String
searchInputName =
    "repo-search-input"

viewSearchInput : String -> Bool -> Html Msg
viewSearchInput query isLoading =
    div [ class "input-field" ]
        [ label [ for searchInputName ] [ text "Search repositories" ]
        , input [ type_ "text"
            , autofocus True
            , value query
            , id searchInputName
            , onInput SetQuery
            ] []
        , viewLoading isLoading
        ]


-- <div class="preloader-wrapper active">
   --    <div class="spinner-layer spinner-red-only">
   --      <div class="circle-clipper left">
   --        <div class="circle"></div>
   --      </div><div class="gap-patch">
   --        <div class="circle"></div>
   --      </div><div class="circle-clipper right">
   --        <div class="circle"></div>
   --      </div>
   --    </div>
   --  </div>


viewLoading : Bool -> Html msg
viewLoading isLoading =
    case isLoading of
        True ->
            div
                [ class "preloader-wrapper"
                , class "small"
                , class "active"
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
