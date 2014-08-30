<!DOCTYPE html>
<!-- saved from url=(0049)http://tympanus.net/Development/Stapel/index.html -->
<html>

<head>
    <meta charset="UTF-8">
</head>
<body>
</body>
</html>
<script id="industryTmpl" type="text/x-jsrender">
<li data-pile='{{:industryName}}'>
    <span class='tp-info'>
        <span>{{:companyName}}</span>
        <div>
            <div class="icon">
                <img src="images/review.png"/>1000
            </div>
            <div class="icon">
                <img src="images/comment.png"/>1000
            </div>
            <div class="icon">
                <img src="images/company.png"/>20
            </div>
            <div class="clearfix"></div>
        </div>
    </span>
    <img class='company' src='./images/{{:companyPhoto}}'>
</li>
</script>
<script id="threadTmpl" type="text/x-jsrender">
    <div id='{{:id}}' class='mix {{:category}}' data-myorder='{{:order}}'>
    </div>
</script>
<script id="reviewTmpl" type="text/x-jsrender">
    {{if start}}
        <div class='comment_detail post_start'>
    {{else}}
        <div class='comment_detail'>
    {{/if}}
        <div class="row">
            <div class="col-md-2">
                <img class="avatar img-thumbnail" src="./images/{{:photo}}"/>
            </div>
            <div class="col-md-10">
                <div class="row" style="margin-top: 5px;">
                    {{if start }}
                        <div class="col-md-4">
                            <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">{{:name}}</h4>
                        </div>
                        <div id="{{:ratingId}}" class="col-md-4"></div>
                    {{else}}
                        <div class="col-md-8">
                            <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">{{:name}}</h4>
                            <span class="action_icon reply_icon glyphicon glyphicon-share-alt"></span>
                            <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">{{:replyTo}}</h4>
                        </div>
                    {{/if}}


                    <div id="feedback2" class="col-md-4"></div>
                    <div class="col-md-4">
                        <span class="action_icon minimize glyphicon glyphicon-minus"></span>
                        <span class="action_icon flag glyphicon glyphicon-flag"></span>
                    </div>
                </div>

                <h6>
                    {{:description}}
                </h6>
            </div>
        </div>
        {{if start}}
            <div class="row">
                <div class="col-md-2">
                    {{:~getStatus(solve)}}
                </div>
                <div class="col-md-10">
                    {{:~getCategoryLabel(categories)}}
                </div>
            </div>
        {{/if}}
        <div class="row" style="margin-top:5px;">
            <div class="col-md-2">
                <time class="timeago text-primary text-nowrap" datetime="{{:time}}"></time>
            </div>
            <div class="col-md-10">
                <span class="badge">{{:totalVote}}</span>
                {{if voteUp}}
                    <span class="action_icon up glyphicon glyphicon-chevron-up disabled"></span>
                {{else}}
                    <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                {{/if}}

                {{if voteDown}}
                    <span class="action_icon down glyphicon glyphicon-chevron-down disabled"></span>
                {{else}}
                    <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                {{/if}}

                <button type="button" class="btn btn-success reply">Trả Lời</button>
                <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
            </div>
        </div>
    </div>
</script>