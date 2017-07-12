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

  let wrapperDiv = document.createElement('div');
  let headerDiv = document.createElement('div');
  let bodyDiv = document.createElement('div');
  let metaDiv = document.createElement('div');
  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  let hr = document.createElement('hr');

  metaDiv.innerHTML =
  `<div class="meta">
    <span class="date">${ post.meta.date }</span>
  </div>`;

  let postContent =
    `<img src="${ post.post.image }" />
    <div class="post">
      ${ post.post.content }
    </div>
    <div class="site">
      Part of this content was pulled from <a href="${ post.site.url }">${ post.site.name }</a>.
    </div>`;

  h2.textContent = post.title;
  article.innerHTML = postContent;

  headerDiv.appendChild(h2);
  headerDiv.appendChild(metaDiv);
  headerDiv.classList.add('header-div');
  bodyDiv.appendChild(article);

  wrapperDiv.appendChild(headerDiv);
  wrapperDiv.appendChild(bodyDiv);
  wrapperDiv.appendChild(hr);

  container.appendChild(wrapperDiv);

  bodyDiv.classList.add('hide');
  bodyDiv.classList.add('body-div');

}

function fillBlog() {

  for(i = blogPosts.length - 1; i >= 0; i--) {
    writeBlogPost(blogPosts[i]);
  };

  document.querySelector('.body-div').classList.remove('hide');

}

fillBlog();

container.addEventListener('click', function(e) {
  console.log(e.target.parentNode.className);
  if (e.target.parentNode.className === 'header-div') {
    e.target.parentNode.nextSibling.classList.toggle('hide');
  } else if (e.target.parentNode.parentNode.parentNode.className === 'header-div') {
    e.target.parentNode.parentNode.parentNode.nextSibling.classList.toggle('hide');
  } else if (e.target.className === 'meta') {
    e.target.parentNode.parentNode.nextSibling.classList.toggle('hide');
  };
});
