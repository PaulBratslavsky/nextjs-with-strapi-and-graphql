import AuthorBio from "../AuthorBio";
import TagsSelect from "../TagsSelect";

const MainPageSidebar = ({ posts, tags, bio, filterPosts, selectedTag, setSidebarOpen }) => {
    
    const { firstName, lastName, avatar, postCount } = bio.data;

    return <div className='bg-base-200'>
      <AuthorBio
        avatar={avatar.attributes.url}
        name={`${firstName} ${lastName}`}
        bio={""}
        postCount={postCount}
      />
      <TagsSelect
        tags={tags.data}
        indicator
        filterPosts={filterPosts}
        totalPosts={posts.data.length}
        selectedTag={selectedTag}
        setSidebarOpen={setSidebarOpen}      />
    </div>
};

  export default MainPageSidebar;