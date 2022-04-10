import React, { useState } from 'react';
import { Gallery, HashTag, TextArea } from '../../components';
import useHttp from '../../hooks/http.hook';
import KEYS from '../../constants/keys';
import { useNavigate } from 'react-router-dom';

const BlogAdd = () => {

    const defaultState = {
        id: 0,
        value: '',
        images: []
    };

    const [post, setPost] = useState({ title: '', categories: [], abstracts: [{ ...defaultState }] });
    const navigate = useNavigate();
    const { loading, error, request } = useHttp();
    const [inputCategory, setCategory] = useState('');

    const handleNew = (event) => {
        setPost({ ...post, abstracts: [...post.abstracts, { ...defaultState, id: post.abstracts.length }] });
    }

    const handlePostBlog = async (event) => {
        event.preventDefault();
        try {
            console.log(post);
            const data = await request('/api/blog/post', 'POST', {...post});

            M.toast({ html: data.message });

            navigate('/links');

        } catch (error) {
            M.toast({ html: error.message });
        }
    }

    const onChangeCategory = (event) => {
        const { value } = event.target;
        setCategory(value);
    }

    const handleRemoveTag = (id) => (event) => {
        event.preventDefault();
        setPost({ categories: post.categories.filter((category, index) => index !== id), abstracts: [...post.abstracts] });
    }

    const onChangeTitle = (event) => {
        setPost({...post, title: event.target.value});
    }

    const onKeyDown = (event) => {

        const { key } = event;
        const trimmedInput = inputCategory.trim();

        // mustn't reload page
        if (key === KEYS.enter && !trimmedInput) {
            event.preventDefault();
        }

        if ([KEYS.enter, KEYS.comma, KEYS.space].includes(key) && trimmedInput.length && !post.categories.includes(trimmedInput)) {
            event.preventDefault();
            setPost({ categories: [...post.categories, trimmedInput], abstracts: [...post.abstracts] });
            setCategory('');
        }
    };

    const handleChange = (id) => (event) => {
        setPost(prev => {
            let newData = { ...prev };
            newData.abstracts[id].value = event.target.value;
            return {
                ...newData
            };
        });
    }

    const handleNewImage = (id) => (event) => {
        setPost(prev => {
            let newData = { ...prev };
            newData.abstracts[id].images.push({ id: newData.abstracts[id].images.length, file: URL.createObjectURL(event.target.files[0]) });
            return {
                ...newData
            };
        });
    }

    const handleRemoveImage = (id, abstractId) => (event) => {
        setPost(prev => {
            let newData = { ...prev };
            newData.abstracts[abstractId].images = newData.abstracts[abstractId].images.filter(image => image.id !== id);
            return {
                ...newData
            };
        });
    }

    return (
        <form>
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <h4>Blog Create</h4>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    {post.categories.map((category, index) => {
                        return (
                            <HashTag
                                key={index}
                                tag={category}
                                removeTag={handleRemoveTag(index)} />
                        );
                    })}
                </div>
            </div>
            <div className="row">
                <div className="input-field col s3 m2 offset-m3">
                    <label htmlFor="">Type Category</label>
                </div>
                <div className="input-field col s6 m4">
                    <input id="blogTitle" value={inputCategory} type="text" className="validate" data-length="120" onKeyDown={onKeyDown} onChange={onChangeCategory} />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <i className="material-icons prefix">mode_edit</i>
                    <input id="blogTitle" type="text" className="validate" value={post.title} onChange={onChangeTitle} data-length="120" />
                    <label htmlFor="blogTitle">Title</label>
                </div>
            </div>
            {post.abstracts.map((abstract, index) => {
                return (
                    <>
                        <div className="row">
                            <div className="col s12 m6 offset-m3">
                                <TextArea
                                    key={index} //tmp solution
                                    icon="mode_edit"
                                    placeholder="Input your thoughs"
                                    label="Posts content"
                                    value={abstract.value}
                                    handleChange={handleChange(index)}
                                    readonly={false} />
                            </div>
                        </div>
                        {abstract.images.length > 0 &&
                            <div className="row">
                                <div className="col s12 m6 offset-m3">
                                    <Gallery
                                        abstractId={abstract.id}
                                        images={abstract.images}
                                        handleRemoveImage={handleRemoveImage} />
                                </div>
                            </div>
                        }
                    </>
                );
            })}

            <div className="row">
                <div className="col s12 m3 offset-m3">
                    <a className="btn-flat waves-effect waves-teal" onClick={handleNew}>Add New Abstract</a>
                </div>
                <div className="col s12 m3 right-align">
                    <div className="btn">
                        <input type="file" text="Photo" name="file" onChange={handleNewImage(post.abstracts.length - 1)} multiple />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s6 m3 offset-m3">
                    <button className="btn waves-effect waves-light" type="submit" onClick={handlePostBlog}>Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default BlogAdd;