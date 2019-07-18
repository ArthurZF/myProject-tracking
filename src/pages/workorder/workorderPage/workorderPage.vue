<template>
    <div class="outs">
        <div class="tip flex flex-just-between flex-align-center">
            <div class="user flex flex-align-center">
                <p>尊敬的 {{userName}} {{sex==1?'先生 ':'女士 '}} 今天是{{nowData}}</p>
            </div>
            <div class="admin-hello flex flex-align-center">
                <p class="pointer" @click="goAdmin" v-show="isManage">进入管理界面</p>
                <p class="pointer" @click="goIndex">退出</p>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "workorder",
        data() {
            return {
                userName: "",
                isManage: false,
                nowData: "",
                sex: ""
            };
        },
        beforeMount() {
            this.dispatchAccount();
            this.getName();
            this.getTime();
            this.$router.replace("/showTable")
        },
        methods: {
            getTime() {
                let self = this;
                self.nowData = new Date().toLocaleString().replace(/:\d{1,2}$/, " ");
                setInterval(() => {
                    self.nowData = "";
                    self.nowData = new Date().toLocaleString().replace(/:\d{1,2}$/, " ");
                }, 59 * 1000);
            },
            handleSelect(key) {
                console.log(key);
            },
            goAdmin() {
                window.location.replace("./administrator.html");
            },
            goIndex() {
                window.location.replace("/tracking/index.html");
            },
            dispatchAccount() {
                this.$store.commit("changeAccountId", document.cookie.split("=")[1]);
            },
            async getName() {
                let res = await this.$post("userName", {
                    accountId: this.$store.getters.getAccountId
                });
                this.userName = res.resData.userName;
                this.sex = res.resData.sex;
                this.isManage = Boolean(res.resData.isManage);
                if (res.resData.versionText != "" && res.resData.versionText != null)
                    this.$notify.info({
                        title: "版本更新！！！",
                        dangerouslyUseHTMLString: true,
                        duration: 0,
                        message: res.resData.versionText.replace(/a/g, "<br />")
                    });
            }
        }
    };
</script>
<style lang="less" scoped>
    .outs {
        width: 1000px;
        margin: 0 auto;

        .tip {
            width: 100%;
            height: 60px;
            padding: 0 20px;
            box-sizing: border-box;
            background-color: rgb(84, 92, 100);
            border-bottom: solid 1px #e6e6e6;
        }

        .admin-hello {
            height: 60px;
            font-size: 14px;

            p:first-child {
                color: #ffd04b;
            }

            p:last-child {
                margin-left: 30px;
                color: #fff;
            }
        }

        .user {
            height: 60px;
            font-size: 14px;

            p {
                color: #ffd04b;
            }
        }
    }
</style>