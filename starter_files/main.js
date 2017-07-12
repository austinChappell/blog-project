let blogPosts = [

{
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
},

{
  title: "The Amazing Monkey",
  meta: {
    date: "July 12, 2017"
  },
  post: {
    image: "https://cdn.pixabay.com/photo/2017/04/02/06/21/monkey-2195107_960_720.jpg",
    content: "Monkeys are haplorhine primates, a group generally possessing tails and consisting of about 260 known living species. There are two distinct lineages of monkeys: New World Monkeys and catarrhines."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Monkey"
  }
},

{
  title: "The Amazing Tiger",
  meta: {
    date: "July 13, 2017"
  },
  post: {
    image: "https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_960_720.jpg",
    content: "The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Tiger"
  }
}

];
// Start Editing Here
let container = document.querySelector('.container');

function writeBlogPost(post) {
  let div = document.createElement('div');
  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  let hr = document.createElement('hr');
  let postContent =
    `<div class="meta">
      <span class="date">${ post.meta.date }</span>
    </div>
    <img src="${ post.post.image }" />
    <div class="post">
      ${ post.post.content }
    </div>
    <div class="site">
      Part of this content was pulled from <a href="${ post.site.url }">${ post.site.name }</a>.
    </div>`;

  h2.textContent = post.title;
  article.innerHTML = postContent;
  article.classList.add('hide');
  div.appendChild(h2);
  div.appendChild(article);
  div.appendChild(hr);
  container.appendChild(div);
  h2.addEventListener('click', function() {
    article.classList.toggle('hide');
  });
}

function fillBlog() {
  for(i = blogPosts.length - 1; i >= 0; i--) {
    writeBlogPost(blogPosts[i]);
  };
  document.querySelector('article').classList.remove('hide');
}

fillBlog();
