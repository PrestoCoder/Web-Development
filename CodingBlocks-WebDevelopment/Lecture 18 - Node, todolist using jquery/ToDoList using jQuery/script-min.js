$("body").append($("<main></main>").append($("<h1></h1>").text("Task List")).append($("<input>").addClass("inputTask").attr("type","text")).append($("<button></button>").addClass("addTaskButton").text("Add task").click(function(){$(".taskList").append($("<li></li>").addClass("item").append($("<div></div>").addClass("taskMain").append($("<input>").addClass("checkTask").attr("id","checkTask").attr("type","checkbox").click(function(){$(this).next().toggleClass("taskChecked")})).append($("<span>").text($(".inputTask").val()).addClass("task"))).append($("<div></div>").addClass("taskButtons").append($("<span></span>").addClass("upArrow").text("⬆").click(function(){let t=$(this).parent().parent(),a=t.prev();t.insertBefore(a)})).append($("<span></span>").addClass("downArrow").text("⬇").click(function(){let t=$(this).parent().parent(),a=t.next();t.insertAfter(a)})).append($("<span></span>").addClass("deleteButton").text("❌").click(function(){$(this).parent().parent().remove()}))))})).append($("<ul></ul>").addClass("taskList")));