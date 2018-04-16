<template>
  <v-layout>
    <v-flex xs4>
        <panel title="Song Metadata">
        <v-text-field
            type="text"
            v-model="song.title"
            label="Title"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            type="text"
            v-model="song.artist"
            label="Artist"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            type="genre"
            v-model="song.genre"
            label="Genre"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            type="text"
            v-model="song.album"
            label="Album"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            type="text"
            v-model="song.albumImageUrl"
            label="Album Image Url"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            type="text"
            v-model="song.youtubeId"
            label="Youtube ID"
            required
            :rules="[required]"
        ></v-text-field>
        </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
            label="Tab"
            multi-line
            v-model="song.tab"
            required
            :rules="[required]"
        ></v-text-field>
        <v-text-field
            label="Lyrics"
            multi-line
            v-model="song.lyrics"
            required
            :rules="[required]"
        ></v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">{{error}}</div>
      <v-btn @click="create" dark class="cyan">Create Song</v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({name: 'songs'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .danger-alert {
    color: red;
  }
</style>
