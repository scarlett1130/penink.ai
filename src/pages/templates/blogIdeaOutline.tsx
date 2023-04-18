import Textarea from '../../components/units/textarea'

const BlogIdeaOutline = () => {
    return (
        <>
            <Textarea
                name="about"
                title='post_about'
                rows={1}
                note='minimum_10_character'
                min={10}
            />
            <Textarea
                rows={1}
                note='separate_keywords_with'
                name='keywords'
                title='keywords'
            />
        </>
    )
}

export default BlogIdeaOutline