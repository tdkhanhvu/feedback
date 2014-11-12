<?php include('language.php');?>

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
    <div id='{{:id}}' class='mix {{:category}} {{:solve}}' data-myorder='{{:order}}'>
    </div>
</script>
<script id="reviewTmpl" type="text/x-jsrender">
    {{if type == 'thread'}}
        <div class="row">
            <div class="col-md-12 thread_tag">
                {{:~getStatus(solved)}}
                {{:~getCategoryLabel(categories)}}
                <div id="{{:ratingId}}" style="float:right"></div>
            </div>
        </div>
        <div class='comment_detail post_start' start='1' id={{:id}}>
    {{else}}
        {{if type == 'comment'}}
            <div class='comment_detail' start='1' id={{:id}}>
        {{else}}
            <div class='comment_detail reply_content' start='1' id={{:id}}>
        {{/if}}
    {{/if}}
        <div class="row">
            <div class="col-md-1">
                <img class="avatar" src="./images/{{:photo}}"/>
            </div>
            <div class="col-md-11">
                <div class="row">
                {{if type == 'reply'}}
                    <div class="col-md-11" style="padding:0 0 0 3px">
                {{else}}
                    <div class="col-md-11" style="padding:0">
                {{/if}}
                        <h5 style="margin: 0.5% 2%;float:left"><span style="color: rgb(141, 30, 30);margin-right:5px;">{{:name}}</span>{{:text}}</h5>
                    </div>

                    <div class="col-md-1">
                        <!-- <span class="action_icon minimize glyphicon glyphicon-minus"></span> -->
                        {{if ownPost}}
                            {{if solved == '0'}}
                                <span class="action_icon accept glyphicon glyphicon-ok"></span>
                            {{/if}}
                        {{else}}
                            {{if spam_report == '1'}}
                                <span class="action_icon active flag glyphicon glyphicon-flag" userId={{:userId}}></span>
                            {{else}}
                                <span class="action_icon flag glyphicon glyphicon-flag" userId={{:userId}}></span>
                            {{/if}}
                        {{/if}}
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

                        {{if type != 'reply'}}
                            <button type="button" class="btn btn-success reply"><?php echo $lang['REPLY']; ?></button>
                        {{/if}}

                        {{if vote=='down'}}
                            <span class="action_icon down glyphicon glyphicon-chevron-down clicked"></span>
                        {{else}}
                            <span class="action_icon down glyphicon glyphicon-chevron-down"></span>
                        {{/if}}

                        {{if vote == 'up'}}
                            <span class="action_icon up glyphicon glyphicon-chevron-up clicked"></span>
                        {{else}}
                            <span class="action_icon up glyphicon glyphicon-chevron-up"></span>
                        {{/if}}

                        <span class="badge">{{:up - down}}</span>
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

        {{if type == 'comment' && replies > 0}}
            <div class="viewReplies"><span class="glyphicon glyphicon-comment"></span><a><?php echo $lang['VIEW_REPLIES']; ?></a></div>
            <div class="hideReplies"><span class="glyphicon glyphicon-chevron-up"></span><a><?php echo $lang['HIDE_REPLIES']; ?></a></div>
            <div class="previousReplies"><span class="glyphicon glyphicon-comment"></span><a><?php echo $lang['PREVIOUS_REPLIES']; ?></a></div>
        {{/if}}
    </div>
</script>
<script id="companyTmpl" type="text/x-jsrender">
    <div style="width:100%;margin:0 auto;">
        <p id="select_branch_text" ><?php echo $lang['SELECT_BRANCHES']; ?></p>
        <select id="branch_list" style="width:100%">
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