<!-- SearchFilter.vue -->
<template>
  <div class="card-container">
       <input type="text" v-model="searchQuery" placeholder="Enter your search query" />
    <div v-if="filteredItems.length > 0" class="grid-container"> 
      <div v-for="item in filteredItems" :key="item.id" class="card p-2">
        <div class="card-body">
          <a class="card-link" :href="item.link">
            <div class="card-img">
              <img :src="item.image" :alt="item.alt" loading="lazy" />
            </div>
          </a>
          <a class="card-link" :href="item.categoryLink">
            <div class="card-content">{{ item.category }}</div>
          </a>
          <a class="card-link" :href="item.link">
            <div class="card-header">{{ item.title }}</div>
            <div class="card-title">{{ item.description }}</div>
          </a>
        </div>
      </div>
      </div> 
      <div v-else class="no-results-message">No matching items found.</div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      searchQuery: '',
      items: [
        // Your data items go here
              {
        id: 1,
        title: 'How to Merge PDF Files with Adobe Reader',
        description: 'Guide to combine PDF files into one within a few clicks, online or offline, with Adobe and its best alternatives.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
            {
        id: 2,
        title: 'Rearrange PDF Pages Online for Free',
        description: 'Free and easy-to-use online tool to rearrange, delete and rotate PDF pages online. No registration, download or registration required.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
            {
        id: 3,
        title: 'Add Pages to PDF Files and Combine PDF Pages Online for Free',
        description: 'No watermarks or size limit—just a simple and easy-to-use online tool to add pages to your PDF files for free.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
                  {
        id: 4,
        title: 'PDF Joiner—Merge PDF Files Online for Free',
        description: 'Join PDF files together online without cost or registration, in a simple click.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
                  {
        id: 5,
        title: 'How to Combine PDF Files Online',
        description: 'You can use our online tool to merge your PDF files instantly—just drag and drop your files to start.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
                  {
        id: 6,
        title: 'How to End a Cover Letter',
        description: 'When you apply for a job, there’s always space for you to attach a cover letter. And you should: It may be the only document the hiring manager reads.',
        link: '/blog/how-to-merge-pdf-files-with-adobe-reader',
        image: '//images.ctfassets.net/l3l0sjr15nav/73nZxxfb2Mgc6iEM6iY0EC/337de566c72e125db4e9c06c6464d5fa/merge-large_2x.png',
        alt: 'merge-large@2x.png',
        category: 'How To Merge PDF',
        categoryLink: '/blog?type=how-to&tool=merge-pdf',
      },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return (
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
.card-container {
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  border: none;
}

.card-body {
  padding: 0;
}

.card-img {
  overflow: hidden;
  height: 162px;
  padding-bottom: 12px;
}

.card-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

.card-header {
  color: rgb(36, 136, 207);
  font-weight: bold;
  padding: 0;
}

.card-title {
  color: black;
  font-size: 1rem;
}

.card-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(117, 117, 117);
  padding-bottom: 6px;
  text-transform: uppercase;
}
</style>
