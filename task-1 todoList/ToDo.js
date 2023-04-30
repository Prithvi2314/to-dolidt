const task = document.querySelector("#task");
const button = document.querySelector("button");
const tasklist = document.querySelector(".todo-list");
const tick = document.querySelector(".fa-check");


button.addEventListener(											//Fetching Value From Input
	"click" ,                                     			
	function(e)
	{
			if (task.value === "") {
				alert("Enter Something");
			}
			else

			addTask(task.value);
			task.value = "";

		}
	
)

const addTask = (item)=>{											//Adding Task <LI> into List
	const listItem = document.createElement("li");
	listItem.innerHTML=`
		${item}
		<span>
            <i class="fa fa-check"></i>
            <i class="fa fa-circle-minus"></i>
        </span>
	`;

	listItem.querySelector(".fa-check").addEventListener(			//Work Done	
		"click" ,
		function(){
			listItem.classList.toggle("done");
			this.remove();
		}
	)

	listItem.querySelector(".fa-circle-minus").addEventListener(	//Removing List Item
		"click" ,
		function(){
			listItem.remove();
		}
	)
	tasklist.appendChild(listItem);									//Appending <li> in HTML
}