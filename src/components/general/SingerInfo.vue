<template>
    <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <v-img sizes="60px" style="border-radius: 100%" :src="'https://docs.google.com/uc?id=' + singer.user.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ singer.nickname }}</v-list-item-title>
            <v-list-item-subtitle>100K quan tâm</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    props: ['singer']
}
</script>