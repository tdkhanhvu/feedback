<!DOCTYPE html>
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
    <div id='{{:id}}' class='mix {{:category}}' data-myorder='{{:order}}' start='1'>
    </div>
</script>
<script id="reviewTmpl" type="text/x-jsrender">
    {{if type == 'thread'}}
        <div class="row">
            <div class="col-md-12">
                {{:~getStatus(solved)}}
                {{:~getCategoryLabel(categories)}}
                <div id="{{:ratingId}}" style="float:right"></div>
            </div>
        </div>
        <div class='comment_detail post_start'>
    {{else}}
        <div class='comment_detail'>
    {{/if}}
        <div class="row">
            <div class="col-md-1">
                <img class="avatar" src="./images/{{:photo}}"/>
            </div>
            <div class="col-md-11">
                <div class="row">
                    <div class="col-md-10" style="padding:0">
                        <h5 style="margin:5px;float:left"><span style="color: rgb(141, 30, 30);margin-right:5px;">{{:name}}</span>{{:desc}}</h5>
                    </div>

                    <div class="col-md-2">
                        <!-- <span class="action_icon minimize glyphicon glyphicon-minus"></span> -->
                        <span class="action_icon flag glyphicon glyphicon-flag"></span>
                    </div>
                </div>

                <div class="row command_button">
                    <div style="float:left">
                        <time class="timeago text-primary text-nowrap" datetime="{{:time}}"></time>
                    </div>
                    <div style="float:right; margin-right:20px;">
                        <img class="action_icon" src="images/icon/social/glyphicons_social_30_facebook.png"/>
                        <img class="action_icon" src="images/icon/social/glyphicons_social_02_google_plus.png"/>
                        <img class="action_icon" src="images/icon/social/glyphicons_social_31_twitter.png"/>

                        {{if userName != name}}
                            <button type="button" class="btn btn-success reply">Trả Lời</button>
                        {{/if}}

                        {{if voteDown}}
                            <span class="action_icon down glyphicon glyphicon-chevron-down disabled"></span>
                        {{else}}
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                        {{/if}}

                        {{if voteUp}}
                            <span class="action_icon up glyphicon glyphicon-chevron-up disabled"></span>
                        {{else}}
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                        {{/if}}

                        <span class="badge">{{:vote}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row uploadphotos">
            {{if uploadphotos}}
                  {^{for uploadphotos}}
                    <img class="img-responsive img-thumbnail img_uploaded" src="uploaded_file/{{:photo}}"/>
                  {{/for}}
            {{/if}}
        </div>
    </div>
</script>
<script id="companyTmpl" type="text/x-jsrender">
    <div style="width:100%;margin:0 auto;">
        <p id="select_branch_text" >Chọn chi nhánh</p>
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