<template>
    <f7-page class="color-theme-orange">
        <f7-navbar title="Settings" back-link="Back"></f7-navbar>
        <div class="block block-strong">
            <p>Just try to fill the form below and then go to any other page, or even you may close this site, and when you
                return here form fields will have kept your data.</p>
        </div>
        <form class="list form-store-data" id="demo-form">
            <ul>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Name</div>
                        <div class="item-input-wrap">
                            <input name="name" type="text" placeholder="Your name">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Password</div>
                        <div class="item-input-wrap">
                            <input name="password" type="password" placeholder="Your password">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">E-mail</div>
                        <div class="item-input-wrap">
                            <input name="email" type="email" placeholder="Your e-mail">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">URL</div>
                        <div class="item-input-wrap">
                            <input name="url" type="url" placeholder="URL">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Phone</div>
                        <div class="item-input-wrap">
                            <input name="phone" type="tel" placeholder="Your phone number">
                            <span class="input-clear-button"></span>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Gender</div>
                        <div class="item-input-wrap">
                            <select name="gender" placeholder="Please choose...">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Birthday</div>
                        <div class="item-input-wrap">
                            <input name="birthday" type="date" value="2014-04-30" placeholder="Please choose...">
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Date time</div>
                        <div class="item-input-wrap">
                            <input name="date" type="datetime-local" placeholder="Please choose...">
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">Range</div>
                        <div class="item-input-wrap">
                            <div class="range-slider range-slider-init" data-label="true">
                                <input name="range" type="range" value="50" min="0" max="100" step="1">
                            </div>
                        </div>
                    </div>
                </li>
                <li class="item-content item-input">
                    <div class="item-inner">
                        <div class="item-title item-label">About you</div>
                        <div class="item-input-wrap">
                            <textarea name="bio" class="resizable" placeholder="Bio"></textarea>
                        </div>
                    </div>
                </li>
            </ul>
        </form>
    </f7-page>
</template>
<script>
    import { f7Navbar, f7Page, f7BlockTitle } from 'framework7-vue';

    export default {
        components: {
            f7Navbar,
            f7Page,
            f7BlockTitle,
        },
    };
</script>
