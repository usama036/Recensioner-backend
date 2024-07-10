import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
const tinymceApiKey = "8e410octhq4d448tmua15hm6oybhb0rio31xpfultmz3oyn4";

const TinyEditor = ({
  disabled,
  editorRef,
  error,
  isPreviewMode,
  name,
  onChange,
  placeholder,
  textareaRef,
  value,
}) => {
  const onChangeRef = useRef(onChange);

  function onBlur(ev, editor) {
    const content = editor.getContent();
    onChangeRef.current({ target: { name, value: content, type: "wysiwyg" } });
  }

  return (
    <>
      <Editor
        apiKey={tinymceApiKey}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onBlur={onBlur}
        initialValue={value}
        init={{
          min_height: 500,
          max_height: 500,
          menubar: true,
          convert_urls: false,
          relative_urls: true,
          remove_script_host: true,
          // toolbar_mode: "wrap",
          // powerpaste_allow_local_images: true,
          // powerpaste_word_import: "prompt",
          // powerpaste_html_import: "prompt",
          // skin: "oxide",
          // theme: "silver",
          branding: false,
          image_advtab: true,
          image_caption: true,
          image_title: true,
          image_uploadtab: true,
          a11y_advanced_options: true,
          draggable_modal: true,
          table_class_list: [
            { title: "None", value: "" },
            { title: "Mobile view Support", value: "table-responsive" },
          ],
          toolbar_mode: "sliding",
          rel_list: [
            { title: " ", value: " " },
            { title: "No Referrer", value: "noreferrer" },
            { title: "External Link", value: "external" },
          ],
          quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          templates: [
            {
              title: "Template 1",
              description: "Template 1",
              content:
                '<div style="background: #F4F8FF !important; padding: 25px; margin-bottom: 10px;"><h2 style="background: #FFFFFF; border: 2px solid #2176FF; box-sizing: border-box; width: 80%; font-style: normal; font-weight: 600; font-size: 20px; line-height: 29px; color: #2176ff; padding: 12px; padding-left: 20px; margin-top: 20px;"><span class="ez-toc-section" id="The_Journey_of_MWC22"></span>The Journey of MWC22<span class="ez-toc-section-end"></span></h2><p style="font-style: normal; font-weight: 500; font-size: 18px; line-height: 30px; color: #4b4b4b; margin-top: 25px;">The internet is full of inundated accounts of how people felt attending the biggest technology event physically after two years of virtual events. Mobile Technology Congress 2022 took place in Barcelona, Spain this month from 28th February to 3rd of March.</p></div>',
            },
            {
              title: "Template 2",
              description: "Template 2",
              content:
                '<div style="background: #FFFFFF; border: 1px solid #2176FF; box-sizing: border-box; box-shadow: 0px 4px 9px rgba(136, 136, 136, 0.23); padding: 20px; margin-bottom: 15px;"><h1 style="font-style: normal; margin-top: 10px; margin-bottom: 10px; font-weight: bold; font-size: 24px; line-height: 30px; color: #000000;"><span class="ez-toc-section" id="Interactive_discussions"></span>Interactive discussions<span class="ez-toc-section-end"></span></h1><p style="margin-top: 18px; margin-bottom: 20px; font-style: normal; font-weight: 500; font-size: 18px; line-height: 30px; color: #4b4b4b;">We had four days packed with one-on-one meetings, interactive discussions, and conversations with the visitors and came across some very interesting and keen to know people at the event. People who were interested to get to know about this side of the world and what we are up to in the technology realm.</p><p><button style="font-size: 16px; padding-left: 14px; padding-right: 14px; margin-top: 8px; background: #2176FF; border-radius: 8px; letter-spacing: -0.231818px; color: #ffffff; border: 1px solid #2176FF; padding: 6px 16px;">Tell us about your ideas</button></p></div>',
            },
            {
              title: "Template 3",
              description: "Template 3",
              content:
                '<h2 style="border-left: 5px solid #2176FF; padding-left: 15px; font: 24px, SemiBold; color: #2d3748;"><span class="ez-toc-section" id="Understanding_Software_Development_Outsourcing"></span><strong>Understanding Software Development Outsourcing</strong><span class="ez-toc-section-end"></span></h2>',
            },
          ],
          plugins: [
            "advlist autolink lists link image imagetools charmap print autosave blockquote preview anchor",
            "searchreplace visualblocks autoresize code fullscreen",
            "insertdatetime importcss template table paste powerpaste help",
            "media codesample pagebreak quickbars nonbreaking toc",
            "hr visualchars save noneditable emoticons wordcount directionality",
          ],
          toolbar:
            "undo redo | formatselect fontsizeselect formatselect forecolor backcolor | bold italic underline strikethrough removeformat |alignleft aligncenter alignright alignjustify |outdent indent | numlist bullist |table link anchor | insertfile image media codesample charmap emoticons | fullscreen code",
        }}
      />
    </>
  );
};

TinyEditor.defaultProps = {
  disabled: false,
  error: undefined,
  isPreviewMode: false,
  placeholder: "",
  value: "",
};

TinyEditor.propTypes = {
  disabled: PropTypes.bool,
  editorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  error: PropTypes.string,
  isPreviewMode: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  textareaRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  value: PropTypes.string,
};

export default TinyEditor;
