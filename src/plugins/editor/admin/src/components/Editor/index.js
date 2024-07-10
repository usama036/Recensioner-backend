import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";
import { request } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import taskRequests from "../../api/settings";
// import "./style.css";
//
const TinyEditor = ({ onChange, name, value }) => {
  const [pluginConfig, setPluginConfig] = useState();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const getApiKey = async () => {
      const data = await taskRequests.getSettings();
      if (data) {
        return setApiKey(data.data.apiKey);
      }
    };
    const getPluginConfig = async () => {
      const editor = await request(`/${pluginId}/config/editor`, {
        method: "GET",
      });
      if (editor) {
        setPluginConfig(editor);
      }
    };
    getApiKey();
    getPluginConfig();
  }, []);
  //
  // var keepSelector = false;
  // tinymce.init({
  //   importcss_selector_converter: function (selector) {
  //     if (selector == ".myCustomStyleStart") {
  //       keepSelector = true;
  //       return false;
  //     } else if (selector == ".myCustomStyleEnd") {
  //       keepSelector = false;
  //     }
  //     if (!keepSelector) {
  //       return false;
  //     }
  //     return this.convertSelectorToFormat(selector);
  //   },
  // });

  //
  return (
    <Editor
      apiKey={apiKey || "y7m4jubrw6pbnvmcwl7bkvhz36vqvl4hvs2tzjfvvhiutjet"}
      value={value}
      tagName={name}
      onEditorChange={(editorContent) => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat={pluginConfig?.outputFormat || "html"}
      init={{
        // selector: "div", // change this value according to your html
        // plugins: "importcss",
        content_css: "/assets/images/style.css",
        content_script: "/assets/images/sample.js",
        importcss_append: true,
        min_height: 500,
        max_height: 500,
        menubar: true,
        convert_urls: false,
        relative_urls: true,
        remove_script_host: true,
        // toolbar_mode: "wrap",
        powerpaste_allow_local_images: false,
        // powerpaste_word_import: "prompt",
        // powerpaste_html_import: "prompt",
        // skin: "oxide",
        // theme: "silver",
        branding: false,
        fontsize_formats:
          "2px 4px 6px 8px 9px 10px 11px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 36px 38px 40px 42px",
        image_advtab: true,
        image_caption: true,
        image_title: true,
        image_uploadtab: false,
        a11y_advanced_options: true,
        draggable_modal: true,
        fix_list_elements: true,
        toolbar_mode: "sliding",
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quicktable",
        plugins: [
          "advlist autolink lists link image imagetools charmap print autosave blockquote preview anchor",
          "searchreplace visualblocks autoresize code fullscreen",
          "insertdatetime importcss template table paste powerpaste help",
          "media codesample pagebreak nonbreaking toc",
          "hr visualchars save noneditable emoticons wordcount directionality",
        ],
        templates: [
          {
            title: "Some title 2",
            description: "Some desc 2",
            // url: "/assets/images/sample.html",
          }, //remember put full path to url, and also the url can be a server side script file, such as: my_template.php?t=1

          {
            title: "Template 1 - Heading",
            description: "Template 3",
            content:
              '<h2 style="font-weight: 700; border-left: 5px solid; border-image: linear-gradient(70deg, #05B2DA, #1FC971) 1 !important; padding-left: 15px; background: linear-gradient(90deg, #05B2DA -1.44%, #1FC971 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"><span class="ez-toc-section" id="Understanding_Software_Development_Outsourcing"></span><strong>Heading H2</strong><span class="ez-toc-section-end"></span></h2>',
          },
          {
            title: "Template 2 - The Journey of MWC’23",
            description: "The Journey of MWC’23",
            content:
              '<div style="background: linear-gradient(90deg, #0F1A54 0%, #1B286F 100%); padding: 25px; margin-bottom: 10px;"><h2 style="padding: 10px !important; border: 1px solid #FFFFFF; box-sizing: border-box; width: 80%; font-weight: 600;font-size: 23px !important; line-height: 37px;  color: #FFFFFF !important";><span class="ez-toc-section" id="The_Journey_of_MWC22"></span>The Journey of MWC’23<span class="ez-toc-section-end"></span></h2><p style="font-style: normal; font-weight: 400; font-size: 20px !important; line-height: 30px !important; color: #FFFFFF !important; margin-top: 25px !important;">Blockchain Wallet makes the use of bitcoin and ether simple. It secures your funds and allows you to exchange digital assets anytime from anywhere. Its high level of security gives peace of mind</p></div>',
          },
          {
            title: "Template 3 - Android-based Wallets",
            description: "Android-based Wallets",
            content:
              '<div style="margin-bottom: 2rem; padding: 40px !important; background: linear-gradient(89.9deg, #242C5A 0.08%, rgb(36 44 90) 99.92%)!important; border: 3px solid !important; border-image: linear-gradient(70deg, #05B2DA, #1FC986) 1 !important;"><h2 style="color: #ffffff !important; font-style: normal !important; font-weight: 700 !important; font-size: 25px !important; line-height: 37px !important;">Android-based Wallets</h2><p style="font-style: normal !important; font-weight: 400 !important; font-size: 20px !important; line-height: 30px !important; color: #ffffff !important;">Android-based wallets allow you to store, send, and receivecryptocurrency from your android device. It stores the private keyon your mobile device using which you can make transactions veryeasily. However, due to the constant connection of the mobile deviceto the internet, android-based wallets turn out to be morevulnerable to attacks.</p><button type="button" href="#" target="_blank" style="margin-bottom: 1rem !important; width: 162.5px !important; height: 44.36px !important; background: linear-gradient(90deg, #043B4D 0%, #3070AA 100%) !important; border: transparent !important; font-style: normal !important; font-weight: 500 !important; font-size: 16.4925px !important; line-height: 60px !important; display: flex !important; align-items: center !important; text-align: center !important; color: #FFFFFF !important; justify-content: center !important;">Text Here</button></div>',
          },
          {
            title: "Template 4 - Furqan Aziz",
            description: "Template 4",
            content: `<div style="background-image: url(https://invoblox.s3.us-east-2.amazonaws.com/furqanbg_dd3671dbaa.svg?updated_at=2023-02-22T05:52:40.654Z); background-position: 100% 0; background-size: cover; background-repeat: no-repeat; padding: 130px 50px;">
            <div style="position: absolute; top: 40px; left: 50px;">
              <img
                alt="sideQuote"
                loading="lazy"
                src="https://invoblox.s3.us-east-2.amazonaws.com/comma_26ff40574b.svg?updated_at=2023-02-22T05:52:34.138Z"
              />
            </div>
            <div>
              <div style="display: flex; align-items: center;">
                <img
                  style="margin-right: 30px;"
                  alt="sideQuote"
                  loading="lazy"
                  src="https://invoblox.s3.us-east-2.amazonaws.com/Group_34728_f7e06f82d7.jpg?updated_at=2023-02-22T05:51:28.451Z"
                />
                <p style="display: grid; font-style: normal; color: #fff;">
                  <span style="font-weight: 700; font-size: 24.933px;">
                    Furqan Aziz
                  </span>
                  <span style="font-weight: 400; font-size: 19.5128px;">
                    CEO & Founder
                  </span>
                </p>
              </div>
              <p style="font-style: normal; font-weight: 400; font-size: 17px; line-height: 24px; color: #ffff;">
                These wallets are different from software wallets as they store
                the private key of the user on a hardware device such as a hard
                drive or USB. The purpose of hardware storage wallets is to ensure
                enhanced security. The reason is that the private key is stored
                offline but the transaction is made online which gives an
                additional layer of security and eliminates the risk of the
                private key getting stolen. It is just like you are keeping the
                physical wallet with you.
              </p>
              <div style="position: absolute; right: 50px; bottom: -70px; -webkit-transform: rotate(180deg); transform: rotate(180deg);">
                <img
                  alt="sideQuote"
                  loading="lazy"
                  src="https://invoblox.s3.us-east-2.amazonaws.com/comma_26ff40574b.svg?updated_at=2023-02-22T05:52:34.138Z"
                />
              </div>
            </div>
          </div>`,
          },
          {
            title: "Template 5 - Video Border Shadow (Youtube etc)",
            description: "Template 6",
            content: `<div style="border: 10px solid !important; border-image: linear-gradient(70deg, #05B2DA, #1FC986) 1 !important; background: transparent; box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 1px; margin: 30px auto; max-width: 760px; position: relative;">
            <div style="height: 0; position: relative; padding-top: 0px; padding-bottom: 56.25%;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" title="YouTube video player" src="https://www.youtube.com/watch?v=jZ21mVFjbm8" width="200" allowfullscreen="allowfullscreen"></iframe></div>
            </div>`,
          },
          {
            title: "Template 8 - MWC 2022",
            description: "Template 6",
            content: `<div style="border: 10px solid !important; border-image: linear-gradient(70deg, #05B2DA, #1FC986) 1 !important; background: transparent; box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 1px; margin: 30px auto; max-width: 760px; position: relative;">
            <div style="height: 0; position: relative; padding-top: 0px; padding-bottom: 56.25%;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" title="YouTube video player" src="https://www.youtube.com/watch?v=c7anwPUPd-A" width="200" allowfullscreen="allowfullscreen"></iframe></div>
            </div>`,
          },
          {
            title: "Template 7 - testing",
            description: "Template 5",
            content: `
              <div id="main">
  <div class="container">
<div class="accordion" id="faq">
                    <div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">S.S.S</a>
                        </div>

                        <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>

                </div>
    </div>
  </div>
            `,
          },
          {
            title: "Table Responsive",
            description: "Table Responsive",
            content: `<div class='tabel-responsive' style="background:transparent;"></div>`,
          },
          {
            title: "CTA",
            description: "CTA",
            content: `<div style="background: #121212; border: 1px solid #e27946; box-sizing: border-box; box-shadow: 0px 4px 9px rgba(136, 136, 136, 0.23); padding: 20px; margin-bottom: 15px; border-radius:8px;">
                <h1 style="font-style: normal; margin-top: 10px; margin-bottom: 10px; font-weight: bold; font-size: 24px; line-height: 30px; color: #FFFFFF;">
                <span class="ez-toc-section" id="Interactive_discussions"></span>Interactive discussions<span class="ez-toc-section-end"></span>
                </h1>
                <p style="margin-top: 18px; margin-bottom: 20px; font-style: normal; font-weight: 500; font-size: 18px; line-height: 30px; color: #FFFFFF;">
                We had four days packed with one-on-one meetings, interactive discussions, and conversations with the visitors and came across some very interesting and keen to know people at the event. People who were interested to get to know about this side of the world and what we are up to in the technology realm.</p>
                <p>
                <button style="font-size: 20px; cursor:pointer padding-left: 14px; padding-right: 14px; margin-top: 8px; background: #e27946 !important; background-color: #e27946 !important; border-radius: 8px; letter-spacing: -0.231818px; color: #FFFFFF; border: 1px solid #e27946; padding: 10px 16px;">Tell us about your ideas</button>
                </p>
                </div>`,
          },
          {
            title: "Fun Fact",
            description: "Fun Fact",
            content:
              '<p style=" border-left: 4px solid #D13600; padding-left: 21px; font-size: 16px; font-family: Inter; font-weight: 400; font-style: italic; color: #000;"><span class="ez-toc-section" id="Fun_Fact" style="color: #000; font-family: Inter; font-size: 16px; font-style: italic; font-weight: 700; line-height: 150%; margin-right: 5px;">Fun Fact:</span><span class="ez-toc-section" id="Understanding_Software_Development_Outsourcing"></span>Understanding Software Development Outsourcing<span class="ez-toc-section-end"></span></p>',
          },
          // {
          //   title: "Fun Fact",
          //   description: "Fun Fact",
          //   contect:
          //     '<p style="color: #000; font-family: Inter; font-size: 16px; font-style: italic; font-weight: 400; line-height: 150%; border-left: 4px solid #D13600; padding-left: 21px;"><span class="ez-toc-section" id="Fun_Fact" style="color: #000; font-family: Inter; font-size: 16px; font-style: italic; font-weight: 700; line-height: 150%; margin-right: 5px;">Fun Fact:</span><span class="ez-toc-section-end">Jsto eget magna fermentum iaculis eu non.</span></p>',
          // },
          {
            title: "Theme Button ",
            description: "Template 3",
            content: ` <button style="font-size: 20px; min-width:30px; cursor:pointer padding-left: 14px; padding-right: 14px; margin-top: 8px; background: #e27946; border-radius: 8px; letter-spacing: -0.231818px; color: #FFFFFF; border: 1px solid #e27946; padding: 10px 16px;">Tell us about your ideas</button>
                `,
          },
          // {
          //   title: "Template 6 - Event Image Slider",
          //   description: "Template 5",
          //   content: `<div class="eventSlider" id="eventSlider_id"><div class="eventSlider_inner" style="background-color: black; padding: 10px;"></div></div>`,
          // },
          // {
          //   title: "Template 7 - Testing Template",
          //   description: "Template 7",
          //   content: `<div style="background: #ffffff; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 1px; margin: 30px auto; max-width: 700px; padding: 10px; position: relative;">
          //   <div style="height: 0; position: relative; padding-top: 0px; padding-bottom: 56.25%;"><button class="my_button" style="background: grey; border-radius: 15px; color:green;>testing button </button></div>
          //   </div>`,
          // },
          // {
          //   title: "Template 8 - backgroung img",
          //   description: "Template 8",
          //   content: `<div style="background: #ffffff; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px 1px; margin: 30px auto; max-width: 700px; padding: 10px; position: relative;">
          //   <div style="height: 0; position: relative; padding-top: 0px; padding-bottom: 56.25%;"><div background-image: url("../../../images/about-us/meetBG.svg");
          //   background-repeat: no-repeat;
          //   background-size: cover;
          //   background-position: center center;>
          //   searchreplace visualblocks autoresize code fullscreensearchreplace visualblocks autoresize code fullscreensearchreplace visualblocks autoresize code fullscreensearchreplace visualblocks autoresize code fullscreensearchreplace visualblocks autoresize code fullscreensearchreplace visualblocks autoresize code fullscreen
          //   </div></div>
          //   </div>`,
          // },
        ],
        rel_list: [ {}, { title: "Do Follow", value: "dofollow" }, { title: "No Follow", value: "nofollow" }, { title: "No Referrer", value: "noreferrer" }, { title: "External Link", value: "external" }, ],

        toolbar:
          "undo redo | formatselect fontsizeselect forecolor backcolor | \
                bold italic underline strikethrough removeformat blockquote | \
                alignleft aligncenter alignright alignjustify | \
                outdent indent | numlist bullist | \
                table link anchor | insertfile image media codesample charmap emoticons | \
                fullscreen code",
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default TinyEditor;
