var app=new Vue({
    el:"#app",
    data:{
        id:"",
        idDelete:"",
        idUpdate:"",
        name:"",
        sex:"",
        mydata:"",
        updateName:"",
        updateSex:""
    },
    methods:{
        getData:function (){
            // var ref=this.$refs;
            axios.post("/getStudent",Qs.stringify({
                        id:this.id
                    }),

                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}

                ).then((response)=>{
                    this.mydata=response.data;
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });

        },getData2:function (){
            // var ref=this.$refs;
            axios.post("/getStudent",Qs.stringify({
                    id:this.idUpdate
                }),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then((response)=>{
                this.updateName=response.data.name;
                this.updateSex=response.data.sex;
            })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });

        }
        ,deleteData(){
            axios.post("/deleteStudent",Qs.stringify({
                    id:this.idDelete
                }),

                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}

            ).then((response)=>{
                if(response.data=="success"){
                    alert("删除成功")
                }

            })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },updateData:function () {
            axios.post("/updateStudent",Qs.stringify({
                    id:this.idUpdate,
                    name:this.updateName,
                    sex:this.updateSex
                }),

                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}

            ).then((response)=>{
                    alert("修改成功，新的数据：id="+response.data.id+" name="+response.data.name+" sex= "+response.data.sex);

            })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },addData:function () {
            axios.post("/addStudent",Qs.stringify({
                    id:this.idUpdate,
                    name:this.updateName,
                    sex:this.updateSex
                }),

                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}

            ).then((response)=>{
                alert("添加成功，新的数据：id="+response.data.id+" name="+response.data.name+" sex= "+response.data.sex);

            })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        }
    }
});