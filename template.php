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
<li data-pile='{{:industryName}}' id='{{:id}}'>
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
                        <div class="col-md-6">
                            <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">{{:name}}</h4>
                        </div>
                        <div id="{{:ratingId}}" class="col-md-4"></div>
                    {{else}}
                        <div class="col-md-10">
                            <h4 style="color: rgb(141, 30, 30);margin:5px;float:left">{{:name}}</h4>
                            <span class="action_icon reply_icon glyphicon glyphicon-share-alt"></span>
                            <h4 style="color: rgb(135, 135, 135);margin:5px;float:left">{{:replyTo}}</h4>
                        </div>
                    {{/if}}

                    <div class="col-md-2">
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

                {{if userName != name}}
                    <button type="button" class="btn btn-success reply">Trả Lời</button>
                {{/if}}

                <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>
            </div>
        </div>
    </div>
</script>
<script id="companyTmpl" type="text/x-jsrender">
    <div style="width:100%;margin:0 auto;">
        <p id="select_branch_text" >Chọn chi nhánh<span class="exit menu-button glyphicon glyphicon-remove-sign"></span></p>
        <select multiple="multiple" id="branch_list" style="width:100%">
            {^{for branches}}
              <option value={{:id}}>{{:name}}</option>
            {{/for}}
        </select>

        <p style="padding:0px;">
            <div style="margin: 0 30%;">
                <img src="./images/{{:photo}}" class="img-responsive thumbnail"/>
            </div>
        </p>
        <p class="branch_info branch_description">
            <img class="info_icon" src="./images/icon/description.png" style="display: inline;">
            {{:description}}
        </p>

        <p class="branch_info">
            <img src="./images/icon/time.png" style="display: inline;">
            <b id="branch_hour">{{:time}}</b>
        </p>
        <p class="branch_info">
            <img src="./images/icon/address.png" style="display: inline;">
            <b id="branch_address">{{:address}}</b>
        </p>
        <p class="branch_info">
            <img src="./images/icon/phone.png" style="display: inline;">
            <b id="branch_phone">{{:phone}}</b>
        </p>
    </div>
</script>
<script id="industryListTmpl" type="text/x-jsrender">
        <select multiple="multiple" id="industry_list" style="width:100%">
            {^{for industries}}
              <option value={{:id}}>{{:name}}</option>
            {{/for}}
        </select>
</script>