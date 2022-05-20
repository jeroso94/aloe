<template>
    <aside>
        <nav>
            <ul>
                <router-link to="/post" class="post">
                    <li>Publier</li>
                </router-link>
            
                <li>Quis</li>
                <li>Viverra</li>
                <li>pulvinar</li>
            </ul>
        </nav>
    </aside>
</template>

<script>
    export default {
        name: 'SidebarLeft'
    }
</script>

<style lang="scss" scoped>
    aside{
        width: 30%;
    }

    ul{
        text-align: start;
    }

    .post{
        text-decoration: none;
        color: rgba($color: green, $alpha: 0.7);
        &:hover {
            color:rgba($color: green, $alpha: 0.3);
        }
    }
</style>