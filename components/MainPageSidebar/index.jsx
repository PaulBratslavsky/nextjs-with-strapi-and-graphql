import AuthorBio from "../AuthorBio";
import TagsSelect from "../TagsSelect";
import CommunityForm from "../CommunityForm";

const MainPageSidebar = ({ posts, tags, bio, filterPosts, selectedTag, setSidebarOpen }) => {
    
    const { firstName, lastName, avatar, } = bio.data;

    return <div className='bg-base-200'>
      <AuthorBio
        avatar={avatar.attributes.url}
        name={`${firstName} ${lastName}`}
        bio={""}
        postCount={posts.data.length}
      />
      <TagsSelect
        tags={tags.data}
        indicator
        filterPosts={filterPosts}
        totalPosts={posts.data.length}
        selectedTag={selectedTag}
        setSidebarOpen={setSidebarOpen}      />
        <CommunityForm />
    </div>
};

  export default MainPageSidebar;