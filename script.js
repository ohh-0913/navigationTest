// 网站数据
let websites = [
    {
        name: "DeepSeek",
        url: "https://chat.deepseek.com",
        description: "我是 DeepSeek，很高兴见到你！",
        icon: "https://www.deepseek.com/favicon.ico",
        category: "AI"
    },
    {
        name: "Doubao",
        url: "https://www.doubao.com/chat",
        description: "让我们一起度过美好的一天！",
        icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/logo_new.png",
        category: "AI"
    },
    {
        name: "ChatGPT",
        url: "https://node2.chatshare.biz/list",
        description: "OpenAI开发的AI聊天助手",
        icon: "https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.png",
        category: "AI"
    },
    {
        name: "百度文心一言",
        url: "https://yiyan.baidu.com",
        description: "百度研发的AI大语言模型",
        icon: "https://nlp-eb.cdn.bcebos.com/static/eb/asset/vip-robin.930b8cae.png",
        category: "AI"
    },
    {
        name: "海螺AI",
        url: "https://hailuoai.com/video",
        description: "AI创意视频平台",
        icon: "https://hailuoai.com/video/favicon.ico",
        category: "AI"
    },
    {
        name: "Kimi",
        url: "https://kimi.moonshot.cn/",
        description: "林深时见鹿，海深时见鲸，情深时见你",
        icon: "https://statics.moonshot.cn/kimi-chat/favicon.ico",
        category: "AI"
    },
    {
        name: "讯飞星火",
        url: "https://xinghuo.xfyun.cn/desk",
        description: "有问必答，我是你的讯飞星火",
        icon: "https://xinghuo.xfyun.cn/spark-icon.ico",
        category: "AI"
    },
    {
        name: "即梦",
        url: "https://jimeng.jianying.com/ai-tool/home",
        description: "轻松实现创意图片",
        icon: "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v5.ico",
        category: "AI"
    },
    /**
     * *****************开发*****************
     */
    {
        name: "CSDN",
        url: "https://www.csdn.net/",
        description: "中国最大的IT技术社区",
        icon: "https://www.csdn.net/favicon.ico",
        category: "开发"
    }, 
    {
        name: "掘金",
        url: "https://juejin.cn/",
        description: "掘金是一个高质量的技术社区",
        icon: "https://juejin.cn/favicon.ico",
        category: "开发"
    },
    {
        name: "GitHub",
        url: "https://github.com/",
        description: "全球最大的代码托管平台",
        icon: "https://github.com/favicon.ico", 
        category: "开发"
    },
    {
        name: "Gitee",
        url: "https://gitee.com/",
        description: "中国最大的代码托管平台",
        icon: "https://gitee.com/favicon.ico",
        category: "开发"
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/",
        description: "全球最大的编程平台",
        icon: "https://leetcode.com/favicon.ico",
        category: "开发"
    },
    {
        name: "翻译",
        url: "https://fanyi.baidu.com/",
        description: "秒翻",
        icon: "https://fanyi.baidu.com/favicon.ico",
        category: "开发"
    },

    /**
     * *****************设计*****************
     */

    {
        name: "包图",
        url: "https://ibaotu.com/",
        description: "原创商用设计下载，会员免费独家图库",
        icon: "https://ibaotu.com/favicon.ico",
        category: "设计"
    },
    {
        name: "站酷",
        url: "https://www.zcool.com.cn/",
        description: "设计师互动交流平台，设计作品分享交流",
        icon: "https://static.zcool.cn/git_z/z/site/favicon.ico",
        category: "设计"
    },
    {
        name: "千图网",
        url: "https://www.58pic.com/",
        description: "专注正版设计素材，提供免费设计模板",
        icon: "https://www.58pic.com/favicon.ico",
        category: "设计"
    },
    {
        name: "Pixabay",
        url: "https://pixabay.com/",
        description: "免费正版高清图片素材库",
        icon: "https://pixabay.com/favicon.ico",
        category: "设计"
    },
    {
        name: "Unsplash",
        url: "https://unsplash.com/",
        description: "美丽的免费图片和照片",
        icon: "https://unsplash.com/favicon-32x32.png",
        category: "设计"
    },
    {
        name: "花瓣网",
        url: "https://huaban.com/",
        description: "陪你做生活的设计师",
        icon: "https://huaban.com/favicon.ico",
        category: "设计"
    },
    {
        name: "字由",
        url: "https://www.hellofont.cn/",
        description: "优质字体获取与管理工具，设计师必备",
        icon: "https://www.hellofont.cn/favicon.ico",
        category: "设计"
    },
    {
        name: "字体天下",
        url: "https://www.fonts.net.cn/",
        description: "提供中英文字体下载、字体格式转换服务",
        icon: "https://www.fonts.net.cn/favicon.ico",
        category: "设计"
    },

    /**
     * *****************社区*****************
     */
    
    {
        name: "小红书",
        url: "https://www.xiaohongshu.com/",
        description: "小红书社区",
        icon: "https://www.xiaohongshu.com/favicon.ico",
        category: "社区"
    },
    {
        name: "抖音",
        url: "https://www.douyin.com/",
        description: "抖音短视频平台",
        icon: "https://www.douyin.com/favicon.ico",
        category: "社区"
    },
    {
        name: "快手",
        url: "https://www.kuaishou.com/",
        description: "快手短视频平台",
        icon: "https://www.kuaishou.com/favicon.ico",
        category: "社区"
    },
    {
        name: "微博",
        url: "https://www.weibo.com/",
        description: "微博社交媒体平台",
        icon: "https://www.weibo.com/favicon.ico",
        category: "社区"
    },
    {
        name: "豆瓣",
        url: "https://www.douban.com/",
        description: "豆瓣社区",
        icon: "https://www.douban.com/favicon.ico",
        category: "社区"
    }, 
    {
        name: "B站",
        url: "https://www.bilibili.com/",
        description: "B站视频平台",
        icon: "https://www.bilibili.com/favicon.ico",
        category: "社区"
    },
    {
        name: "扣子",
        url: "https://www.coze.cn/home",
        description: "Coze智能体创建平台",
        icon: "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png",
        category: "社区"
    },
    {
        name: "飞书",
        url: "https://pcn70vvf4wfm.feishu.cn/next/messenger",
        description: "飞书生产力平台",
        icon: "https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image",
        category: "社区"
    },

    
];
// 图标映射
const categoryIcons = {
    "AI": "ri-openai-fill",
    "开发": "ri-code-fill",
    "设计": "ri-pencil-fill",
    "社区": "ri-community-fill",
    
};

// 当前选中的分类
let currentCategory = "全部";

// 用户自定义分类名称（默认为"全部"）
let userCustomCategoryName = "全部";

// 用户自定义分类网站列表
let userCustomSites = [];

// 拖拽相关函数
let dragItem = null;

function dragStart(e) {
    dragItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.custom-site-item');
    if (target && target !== dragItem) {
        const targetRect = target.getBoundingClientRect();
        const targetY = targetRect.top + targetRect.height / 2;
        
        if (e.clientY < targetY) {
            target.parentNode.insertBefore(dragItem, target);
        } else {
            target.parentNode.insertBefore(dragItem, target.nextSibling);
        }
    }
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    this.classList.remove('dragging');
    
    // 根据当前排序更新数据
    updateCustomSitesOrder();
}

function dragEnd() {
    this.classList.remove('dragging');
    updateCustomSitesOrder();
}

// 根据UI排序更新自定义网站数据
function updateCustomSitesOrder() {
    const siteItems = document.querySelectorAll('#custom-sites-list .custom-site-item');
    const newOrder = [];
    
    siteItems.forEach(item => {
        const index = parseInt(item.dataset.index);
        if (!isNaN(index) && index >= 0 && index < userCustomSites.length) {
            newOrder.push(userCustomSites[index]);
        }
    });
    
    // 更新数据并保存
    if (newOrder.length === userCustomSites.length) {
        userCustomSites = newOrder;
        
        // 更新索引
        siteItems.forEach((item, idx) => {
            item.dataset.index = idx;
        });
        
        // 保存到本地存储
        saveUserCustomCategory();
        
        // 如果当前正在查看该分类，更新显示
        if (currentCategory === userCustomCategoryName) {
            displayWebsites(userCustomSites);
        }
    }
}

// 主题切换功能
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // 检查本地存储的主题偏好或系统偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 设置初始主题
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // 切换主题
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// 添加跨域资源请求处理
function fetchWithCORS(url) {
    return fetch(url, {
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('网络响应不正常');
        }
        return response.json();
    })
    .catch(error => {
        console.error('获取数据失败:', error);
        return null;
    });
}

// 更新每日一言获取方法
function getQuote() {
    const quotesCache = localStorage.getItem('quotesCache');
    const quotesCacheTime = localStorage.getItem('quotesCacheTime');
    const now = new Date().getTime();
    
    // 如果有缓存且缓存时间在24小时内
    if (quotesCache && quotesCacheTime && (now - parseInt(quotesCacheTime)) < 86400000) {
        const quotes = JSON.parse(quotesCache);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        displayQuote(quotes[randomIndex]);
        return;
    }

    // 本地备用名言
    const fallbackQuotes = [
        { text: "生活不是等待风暴过去，而是学会在雨中跳舞。", author: "佚名" },
        { text: "把事情变得简单是明智的。", author: "爱因斯坦" },
        { text: "人类最大的敌人不是别人，而是自己。", author: "苏格拉底" },
        { text: "你的时间有限，不要浪费于重复别人的生活。", author: "乔布斯" }
    ];

    // 尝试从API获取
    fetchWithCORS('https://v1.hitokoto.cn/')
        .then(data => {
            if (data) {
                displayQuote({ text: data.hitokoto, author: data.from_who || data.from });
                
                // 缓存获取到的名言集合
                fetchWithCORS('https://v1.hitokoto.cn/?c=a&c=b&c=c&count=20')
                    .then(quotes => {
                        if (quotes) {
                            const formattedQuotes = quotes.map(q => ({ 
                                text: q.hitokoto, 
                                author: q.from_who || q.from 
                            }));
                            localStorage.setItem('quotesCache', JSON.stringify(formattedQuotes));
                            localStorage.setItem('quotesCacheTime', now.toString());
                        }
                    });
            } else {
                // 使用本地备用名言
                const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
                displayQuote(fallbackQuotes[randomIndex]);
            }
        })
        .catch(() => {
            // 出错时使用本地备用名言
            const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
            displayQuote(fallbackQuotes[randomIndex]);
        });
}

// 加载用户自定义分类设置
function loadUserCustomCategory() {
    // 加载自定义分类名称
    const savedName = localStorage.getItem('userCustomCategoryName');
    if (savedName) {
        userCustomCategoryName = savedName;
    }
    
    // 加载自定义分类网站列表
    const savedSites = localStorage.getItem('userCustomSites');
    if (savedSites) {
        userCustomSites = JSON.parse(savedSites);
    } else {
        // 确保初始状态下为空数组，不包含任何网站
        userCustomSites = [];
    }
}

// 保存用户自定义分类设置
function saveUserCustomCategory() {
    localStorage.setItem('userCustomCategoryName', userCustomCategoryName);
    localStorage.setItem('userCustomSites', JSON.stringify(userCustomSites));
}

// 将网站添加到用户自定义分类
function addToUserCustom(website) {
    let customSites = JSON.parse(localStorage.getItem('userCustomSites') || '[]');
    website.category = userCustomCategoryName; // 确保分类正确
    
    // 检查网站是否已存在于自定义分类中
    const existingIndex = customSites.findIndex(site => site.url === website.url);
    
    if (existingIndex === -1) {
        // 不存在则添加
        customSites.push(website);
    } else {
        // 存在则更新
        customSites[existingIndex] = website;
    }
    
    localStorage.setItem('userCustomSites', JSON.stringify(customSites));
    
    // 更新全局变量
    userCustomSites = customSites;
}

// 从用户自定义列表移除网站
function removeFromUserCustom(website) {
    const initialLength = userCustomSites.length;
    userCustomSites = userCustomSites.filter(site => 
        !(site.url === website.url && site.name === website.name)
    );
    
    if (initialLength !== userCustomSites.length) {
        saveUserCustomCategory();
        return true;
    }
    
    return false;
}

// 生成分类导航
function generateCategoryNav() {
    const categoryNav = document.getElementById('category-nav');
    let categories = [...new Set(websites.map(website => website.category))].sort();
    
    // 清空导航区域，避免重复添加
    categoryNav.innerHTML = '';
    
    console.log('生成导航时的当前分类:', currentCategory);
    
    // 添加用户自定义分类作为第一个
    categories = [userCustomCategoryName, ...categories];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        // 根据当前分类设置活跃状态
        const isActive = category === currentCategory || 
                       (category === userCustomCategoryName && currentCategory === userCustomCategoryName);
        
        button.className = `category-btn ${isActive ? 'active' : ''}`;
        button.dataset.category = category; // 添加数据属性存储准确的分类名称
        
        // 调试信息
        if (isActive) {
            console.log('标记为活跃分类:', category);
        }
        
        // 添加图标
        const iconClass = category === userCustomCategoryName ? "ri-star-line" : 
                          categoryIcons[category] || "ri-question-line";
        
        // 用户自定义分类按钮添加特殊处理
        if (category === userCustomCategoryName) {
            button.classList.add('user-custom-category');
            
            // 创建内部容器用于文本和图标对齐
            const contentSpan = document.createElement('span');
            contentSpan.className = 'category-content';
            contentSpan.innerHTML = `<i class="${iconClass}"></i>${category}`;
            button.appendChild(contentSpan);
            
            // 添加编辑图标
            const editIcon = document.createElement('i');
            editIcon.className = 'ri-edit-line edit-category-icon';
            editIcon.title = '编辑分类';
            button.appendChild(editIcon);
            
            // 动态设置宽度以适应文本长度
            setTimeout(() => {
                const textWidth = contentSpan.offsetWidth + 40; // 添加额外空间给编辑图标
                button.style.minWidth = `${textWidth}px`;
                button.style.paddingRight = '28px'; // 为编辑图标留出空间
            }, 0);
            
            // 添加编辑分类的点击事件
            editIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditCustomCategoryModal();
            });
        } else {
            button.innerHTML = `<i class="${iconClass}"></i>${category}`;
        }
        
        button.addEventListener('click', () => {
            // 移除所有按钮的活跃状态
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            // 设置当前按钮为活跃状态
            button.classList.add('active');
            // 更新当前分类 - 使用数据属性而不是文本内容
            const clickedCategory = button.dataset.category;
            currentCategory = clickedCategory;
            
            console.log('点击切换分类:', clickedCategory);
            
            // 保存用户选择的分类，以便刷新后恢复
            localStorage.setItem('lastSelectedCategory', clickedCategory);
            
            // 根据分类筛选并显示网站
            if (clickedCategory === userCustomCategoryName) {
                displayWebsites(userCustomSites);
            } else {
                const filteredSites = websites.filter(website => website.category === clickedCategory);
                displayWebsites(filteredSites);
            }
        });
        
        categoryNav.appendChild(button);
    });
}

// 打开编辑自定义分类模态窗口
function openEditCustomCategoryModal() {
    const modal = document.getElementById('edit-category-modal');
    const customCategoryNameInput = document.getElementById('custom-category-name');
    const customSitesList = document.getElementById('custom-sites-list');
    const customSitesCount = document.getElementById('custom-sites-count').querySelector('span');
    
    // 清空网站列表
    customSitesList.innerHTML = '';
    
    // 设置当前自定义分类名称
    customCategoryNameInput.value = userCustomCategoryName;
    
    // 显示自定义网站数量
    customSitesCount.textContent = userCustomSites.length;
    
    // 动画效果进入
    modal.style.opacity = '0';
    modal.classList.add('active');
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // 生成自定义网站列表
    if(userCustomSites.length === 0) {
        // 显示空状态提示
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="ri-inbox-line"></i>
            <p>暂无网站，通过右键点击网站添加到"${userCustomCategoryName}"</p>
        `;
        customSitesList.appendChild(emptyState);
    } else {
        // 生成网站列表项
        userCustomSites.forEach((site, index) => {
            const siteItem = document.createElement('div');
            siteItem.className = 'custom-site-item';
            siteItem.draggable = true;
            siteItem.dataset.index = index;
            
            const dragHandle = document.createElement('div');
            dragHandle.className = 'drag-handle';
            dragHandle.innerHTML = '<i class="ri-drag-move-line"></i>';
            
            const siteInfo = document.createElement('div');
            siteInfo.className = 'site-info';
            
            const favicon = document.createElement('img');
            favicon.src = site.icon;
            favicon.alt = site.name;
            favicon.onerror = function() {
                this.src = 'https://img.icons8.com/color/48/000000/globe.png';
            };
            
            const siteName = document.createElement('span');
            siteName.textContent = site.name;
            
            siteInfo.appendChild(favicon);
            siteInfo.appendChild(siteName);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-site-btn';
            deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
            deleteBtn.title = '删除该网站';
            deleteBtn.addEventListener('click', () => {
                // 添加删除确认提示
                if (confirm(`确定要删除"${site.name}"吗？\n此操作无法撤销。`)) {
                    // 创建删除动画效果
                    siteItem.style.opacity = '0';
                    siteItem.style.transform = 'translateX(30px)';
                    
                    // 延迟执行实际删除操作，使动画效果可见
                    setTimeout(() => {
                        userCustomSites.splice(index, 1);
                        saveUserCustomCategory();
                        siteItem.remove();
                        customSitesCount.textContent = userCustomSites.length;
                        
                        // 检查是否删除后列表为空，显示空状态
                        if(userCustomSites.length === 0) {
                            const emptyState = document.createElement('div');
                            emptyState.className = 'empty-state';
                            emptyState.innerHTML = `
                                <i class="ri-inbox-line"></i>
                                <p>暂无网站，通过右键点击网站添加到"${userCustomCategoryName}"</p>
                            `;
                            customSitesList.appendChild(emptyState);
                        }
                        
                        // 如果当前正在查看自定义分类，更新显示
                        if (currentCategory === userCustomCategoryName) {
                            displayWebsites(userCustomSites);
                        }
                    }, 300);
                }
            });
            
            siteItem.appendChild(dragHandle);
            siteItem.appendChild(siteInfo);
            siteItem.appendChild(deleteBtn);
            
            customSitesList.appendChild(siteItem);
            
            // 添加拖拽事件
            siteItem.addEventListener('dragstart', dragStart);
            siteItem.addEventListener('dragover', dragOver);
            siteItem.addEventListener('drop', drop);
            siteItem.addEventListener('dragend', dragEnd);
            
            // 添加鼠标悬停效果
            siteItem.addEventListener('mouseenter', () => {
                deleteBtn.style.opacity = '1';
            });
            
            siteItem.addEventListener('mouseleave', () => {
                deleteBtn.style.opacity = '0.6';
            });
        });
    }
    
    // 绑定导出数据按钮事件
    const exportBtn = document.getElementById('export-data-btn');
    if (exportBtn) {
        // 移除旧的事件监听器
        exportBtn.replaceWith(exportBtn.cloneNode(true));
        const newExportBtn = document.getElementById('export-data-btn');
        newExportBtn.addEventListener('click', exportCustomData);
    }
    
    // 绑定导入数据按钮事件
    const importBtn = document.getElementById('import-data-btn');
    const importFileInput = document.getElementById('import-file-input');
    
    if (importBtn) {
        // 移除旧的事件监听器
        importBtn.replaceWith(importBtn.cloneNode(true));
        const newImportBtn = document.getElementById('import-data-btn');
        newImportBtn.addEventListener('click', () => {
            importFileInput.click();
        });
    }
    
    // 移除旧的事件监听器
    importFileInput.removeEventListener('change', importCustomData);
    importFileInput.addEventListener('change', importCustomData);
}

// 导出自定义分类数据
function exportCustomData() {
    // 创建要导出的数据对象
    const exportData = {
        categoryName: userCustomCategoryName,
        websites: userCustomSites,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    // 转换为JSON字符串
    const jsonData = JSON.stringify(exportData, null, 2);
    
    // 创建Blob
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `navigation-data-${formatDate(new Date())}.json`;
    
    // 点击链接下载文件
    document.body.appendChild(a);
    a.click();
    
    // 清理
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // 显示成功消息
    alert('数据导出成功！文件已保存到您的下载文件夹。');
}

// 导入自定义分类数据
function importCustomData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            // 验证数据格式
            if (!data.websites || !Array.isArray(data.websites)) {
                throw new Error('无效的数据格式');
            }
            
            // 确认导入
            if (confirm(`确定要导入这些数据吗？这将替换您当前的自定义分类"${userCustomCategoryName}"中的所有网站。`)) {
                // 更新分类名称
                if (data.categoryName) {
                    userCustomCategoryName = data.categoryName;
                    localStorage.setItem('userCustomCategoryName', userCustomCategoryName);
                }
                
                // 更新网站列表
                userCustomSites = data.websites;
                saveUserCustomCategory();
                
                // 重新打开模态窗口以刷新显示
                const modal = document.getElementById('edit-category-modal');
                modal.classList.remove('active');
                setTimeout(() => {
                    openEditCustomCategoryModal();
                }, 100);
                
                // 显示成功消息
                alert('数据导入成功！共导入了 ' + data.websites.length + ' 个网站。');
            }
        } catch (error) {
            alert('导入失败：' + error.message);
        }
        
        // 重置文件输入
        event.target.value = '';
    };
    
    reader.readAsText(file);
}

// 格式化日期为 YYYY-MM-DD 格式
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 显示网站卡片
function displayWebsites(websitesToShow) {
    const websiteGrid = document.getElementById('website-grid');
    websiteGrid.innerHTML = '';

    // 如果没有匹配结果
    if (websitesToShow.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'no-result';
        
        // 区分是自定义分类还是其他分类的空状态
        if (currentCategory === userCustomCategoryName) {
            // 自定义分类为空时
            noResult.innerHTML = `
                <i class="ri-star-line"></i>
                <p>"${userCustomCategoryName}"分类中暂无网站</p>
                <p class="no-result-tip">可通过右键菜单将网站添加到此分类</p>
            `;
        } else {
            // 其他分类没有匹配结果
            noResult.innerHTML = '<i class="ri-emotion-sad-line"></i><p>没有找到匹配的网站</p>';
        }
        
        websiteGrid.appendChild(noResult);
        return;
    }

    // 添加延迟以创建动画效果
    websitesToShow.forEach((website, index) => {
        setTimeout(() => {
            const card = createWebsiteCard(website);
            websiteGrid.appendChild(card);
            
            // 添加出现动画
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}

// 创建网站卡片
function createWebsiteCard(website) {
    const card = document.createElement('div');
    card.className = 'website-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // 判断是否是自定义分类中的网站卡片
    const isInCustomCategory = currentCategory === userCustomCategoryName;
    
    // 只为非自定义分类中的网站添加右键菜单
    if (!isInCustomCategory) {
        // 添加右键菜单事件
        card.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // 阻止默认右键菜单
            
            const contextMenu = document.getElementById('context-menu');
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;
            
            // 存储当前选中的网站数据
            contextMenu.dataset.websiteData = JSON.stringify(website);
            
            // 点击其他地方关闭菜单
            const closeMenu = (e) => {
                if (!contextMenu.contains(e.target)) {
                    contextMenu.style.display = 'none';
                    document.removeEventListener('click', closeMenu);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closeMenu);
            }, 0);
        });
    }
    
    card.onclick = () => {
        window.open(website.url, '_blank');
    };

    const iconContainer = document.createElement('div');
    iconContainer.className = 'website-icon';
    
    // 创建默认图标（使用分类图标或基于网站名称的首字母）
    const categoryIconClass = website.category && categoryIcons[website.category] 
        ? categoryIcons[website.category] 
        : categoryIcons["其他"];
    
    const iconElement = document.createElement('i');
    iconElement.className = categoryIconClass;
    iconContainer.appendChild(iconElement);
    
    // 尝试加载网站图标
    if (website.icon) {
        // 检查是否是数据URL（自定义生成的canvas图标）
        if (website.icon.startsWith('data:')) {
            const img = document.createElement('img');
            img.src = website.icon;
            img.style.display = 'block';
            iconElement.style.display = 'none';
            iconContainer.appendChild(img);
        } else {
            // 判断是否是相对路径或绝对路径
            const iconUrl = website.icon.startsWith('http') 
                ? website.icon 
                : new URL(website.url).origin + '/favicon.ico';
                
            const img = document.createElement('img');
            img.style.display = 'none'; // 默认隐藏
            img.src = iconUrl;
            
            // 尝试加载图标
            img.onload = () => {
                // 图标加载成功，显示图标，隐藏类别图标
                iconElement.style.display = 'none';
                img.style.display = 'block';
            };
            
            // 如果无法加载默认图标，尝试使用七牛云的图标服务
            img.onerror = () => {
                try {
                    const domain = new URL(website.url).hostname;
                    img.src = `https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=${domain}`;
                    
                    // 如果七牛云的图标也无法加载，使用字母图标
                    img.onerror = () => {
                        // 如果仍然无法加载，创建基于网站名称的字母图标
                        const canvas = document.createElement('canvas');
                        canvas.width = 42;
                        canvas.height = 42;
                        const ctx = canvas.getContext('2d');
                        ctx.fillStyle = '#4361ee';
                        ctx.fillRect(0, 0, 42, 42);
                        ctx.font = '20px Arial';
                        ctx.fillStyle = 'white';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // 获取网站名称的首字母
                        const initial = website.name ? website.name.charAt(0).toUpperCase() : 'W';
                        ctx.fillText(initial, 21, 21);
                        
                        // 替换为生成的canvas图标
                        img.src = canvas.toDataURL();
                        img.style.display = 'block';
                        iconElement.style.display = 'none';
                    };
                } catch (e) {
                    // 如果URL解析出错，使用默认的类别图标
                    img.style.display = 'none';
                    iconElement.style.display = 'block';
                }
            };
            
            iconContainer.appendChild(img);
        }
    }

    const name = document.createElement('div');
    name.className = 'website-name';
    name.textContent = website.name;

    const description = document.createElement('div');
    description.className = 'website-description';
    description.textContent = website.description;

    // 添加类别标签
    if (website.category) {
        const category = document.createElement('div');
        category.className = 'website-category';
        category.textContent = website.category;
        card.appendChild(category);
    }

    card.appendChild(iconContainer);
    card.appendChild(name);
    card.appendChild(description);

    return card;
}

// 搜索功能 - 多搜索引擎支持
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchEngineIcon = document.getElementById('search-engine-icon');
    const searchEngineDropdown = document.getElementById('search-engine-dropdown');
    const searchEngineItems = document.querySelectorAll('.search-engine-item');
    
    // 搜索引擎配置
    const searchEngines = {
        baidu: {
            name: "百度搜索",
            url: "https://www.baidu.com/s?wd=",
            icon: "ri-baidu-line",
            placeholder: "百度一下，你就知道"
        },
        sogou: {
            name: "搜狗搜索",
            url: "https://www.sogou.com/web?query=",
            icon: "ri-global-line",
            placeholder: "上网从搜狗开始"
        },
        bing: {
            name: "必应搜索",
            url: "https://cn.bing.com/search?q=",
            icon: "ri-microsoft-line",
            placeholder: "用必应搜索发现更多"
        },
        google: {
            name: "谷歌搜索",
            url: "https://www.google.com/search?q=",
            icon: "ri-google-line",
            placeholder: "Google 搜索"
        }
    };
    
    // 当前选择的搜索引擎
    let currentEngine = localStorage.getItem('searchEngine') || 'baidu';
    
    // 初始化搜索引擎图标和占位符
    function updateSearchEngineUI() {
        const engine = searchEngines[currentEngine];
        const iconElement = searchEngineIcon.querySelector('i');
        
        // 更新图标
        iconElement.className = `${engine.icon} search-icon`;
        iconElement.title = `当前：${engine.name}（点击切换）`;
        
        // 更新输入框占位符
        searchInput.placeholder = engine.placeholder;
    }
    
    // 执行搜索
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            const engine = searchEngines[currentEngine];
            const searchUrl = `${engine.url}${encodeURIComponent(searchTerm)}`;
            window.open(searchUrl, '_blank');
        }
    }
    
    // 切换搜索引擎下拉菜单显示状态
    searchEngineIcon.addEventListener('click', () => {
        searchEngineDropdown.classList.toggle('show');
        
        // 点击外部关闭下拉菜单
        function closeDropdown(e) {
            if (!searchEngineIcon.contains(e.target) && !searchEngineDropdown.contains(e.target)) {
                searchEngineDropdown.classList.remove('show');
                document.removeEventListener('click', closeDropdown);
            }
        }
        
        // 延迟添加事件监听，防止立即触发
        setTimeout(() => {
            document.addEventListener('click', closeDropdown);
        }, 0);
    });
    
    // 选择搜索引擎
    searchEngineItems.forEach(item => {
        item.addEventListener('click', () => {
            const engine = item.getAttribute('data-engine');
            currentEngine = engine;
            
            // 保存选择
            localStorage.setItem('searchEngine', engine);
            
            // 更新UI
            updateSearchEngineUI();
            
            // 关闭下拉菜单
            searchEngineDropdown.classList.remove('show');
            
            // 聚焦输入框
            searchInput.focus();
        });
    });
    
    // 处理搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);
    
    // 处理回车键搜索
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 初始化UI
    updateSearchEngineUI();
}

// 加载用户自定义网站
function loadUserWebsites() {
    const userWebsites = localStorage.getItem('userWebsites');
    if (userWebsites) {
        const savedWebsites = JSON.parse(userWebsites);
        // 将用户网站与默认网站合并
        websites = [...websites, ...savedWebsites];
    }
}

// 保存用户添加的网站
function saveUserWebsite(website) {
    let userWebsites = JSON.parse(localStorage.getItem('userWebsites') || '[]');
    userWebsites.push(website);
    localStorage.setItem('userWebsites', JSON.stringify(userWebsites));
    
    // 同时将网站添加到用户自定义分类
    addToUserCustom(website);
}

// 删除用户自定义网站
function deleteUserWebsite(websiteToDelete) {
    // 从当前网站列表中移除
    websites = websites.filter(website => 
        !(website.isCustom && 
          website.name === websiteToDelete.name && 
          website.url === websiteToDelete.url)
    );
    
    // 从本地存储中获取用户网站
    let userWebsites = localStorage.getItem('userWebsites');
    if (userWebsites) {
        let savedWebsites = JSON.parse(userWebsites);
        
        // 从用户网站中移除要删除的网站
        savedWebsites = savedWebsites.filter(website => 
            !(website.name === websiteToDelete.name && 
              website.url === websiteToDelete.url)
        );
        
        // 更新本地存储
        localStorage.setItem('userWebsites', JSON.stringify(savedWebsites));
    }
    
    // 重新加载分类导航和网站列表
    rebuildCategoryNav();
    
    // 显示当前分类的网站
    if (currentCategory === "全部") {
        displayWebsites(websites);
    } else {
        const filteredSites = websites.filter(website => website.category === currentCategory);
        displayWebsites(filteredSites);
    }
}

// 重建分类导航
function rebuildCategoryNav() {
    const categoryNav = document.getElementById('category-nav');
    categoryNav.innerHTML = '';
    generateCategoryNav();
}

// 设置添加网站功能
function setupAddWebsite() {
    const addButton = document.getElementById('add-website-btn');
    const modal = document.getElementById('add-website-modal');
    const closeBtn = document.getElementById('close-modal');
    const form = document.getElementById('add-website-form');
    const categorySelect = document.getElementById('website-category');
    
    // 填充分类下拉列表
    function populateCategorySelect() {
        categorySelect.innerHTML = '';
        
        // 只添加自定义分类，不添加其他分类
        const option = document.createElement('option');
        option.value = userCustomCategoryName;
        option.textContent = userCustomCategoryName;
        option.selected = true;
        categorySelect.appendChild(option);
        
        // 禁用分类选择框
        categorySelect.disabled = true;
        
        // 添加提示信息
        const categoryLabel = document.querySelector('label[for="website-category"]');
        if (categoryLabel) {
            categoryLabel.innerHTML = `分类 <span class="category-hint">(固定为"${userCustomCategoryName}")</span>`;
        }
    }
    
    // 打开模态窗口
    addButton.addEventListener('click', () => {
        populateCategorySelect();
        modal.classList.add('active');
    });
    
    // 关闭模态窗口
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        form.reset();
    });
    
    // 点击模态窗口外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            form.reset();
        }
    });
    
    // 提交表单添加网站
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('website-name').value.trim();
        const url = document.getElementById('website-url').value.trim();
        const description = document.getElementById('website-description').value.trim();
        const category = userCustomCategoryName; // 强制使用自定义分类
        
        // 检查URL格式
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            alert('请输入有效的网址 (http:// 或 https://)');
            return;
        }
        
        // 获取网站favicon
        const faviconUrl = new URL(url).origin + '/favicon.ico';
        
        // 创建新网站对象
        const newWebsite = {
            name,
            url,
            description,
            icon: faviconUrl,
            category,
            isCustom: true // 标记为用户自定义
        };
        
        // 只保存到用户自定义分类，不创建新分类
        addToUserCustom(newWebsite);
        
        // 关闭模态窗口并重置表单
        modal.classList.remove('active');
        form.reset();
        
        // 显示添加成功提示
        alert(`网站添加成功！已添加到"${userCustomCategoryName}"分类中。`);
        
        // 自动切换到自定义分类并显示
        switchToCustomCategory();
    });
}

// 切换到自定义分类并显示
function switchToCustomCategory() {
    // 更新当前分类
    currentCategory = userCustomCategoryName;
    
    // 更新分类按钮状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains('user-custom-category')) {
            btn.classList.add('active');
        }
    });
    
    // 保存用户选择的分类，以便刷新后恢复
    localStorage.setItem('lastSelectedCategory', userCustomCategoryName);
    
    // 显示自定义分类中的网站
    displayWebsites(userCustomSites);
}

// 设置默认分类功能
function setupDefaultCategory() {
    const defaultCategoryBtn = document.getElementById('default-category-btn');
    const modal = document.getElementById('default-category-modal');
    const closeBtn = document.getElementById('close-category-modal');
    const saveBtn = document.getElementById('save-default-category');
    const categorySelect = document.getElementById('default-category-select');
    
    // 填充分类下拉列表
    function populateCategorySelect() {
        categorySelect.innerHTML = '';
        const categories = [userCustomCategoryName, ...new Set(websites.map(website => website.category))].sort();
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            // 设置当前保存的默认分类为选中状态
            const savedCategory = localStorage.getItem('defaultCategory') || userCustomCategoryName;
            if (category === savedCategory) {
                option.selected = true;
            }
            categorySelect.appendChild(option);
        });
    }
    
    // 打开模态窗口
    defaultCategoryBtn.addEventListener('click', () => {
        populateCategorySelect();
        modal.classList.add('active');
    });
    
    // 关闭模态窗口
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // 点击模态窗口外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // 保存默认分类设置
    saveBtn.addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        localStorage.setItem('defaultCategory', selectedCategory);
        
        // 清除会话状态，确保下次打开浏览器时视为新会话
        sessionStorage.removeItem('navigationSession');
        
        // 关闭模态窗口
        modal.classList.remove('active');
        
        // 显示保存成功提示
        alert('默认分类设置已保存！下次启动浏览器时将显示此分类。');
        
        // 如果用户想立即应用新的默认分类
        if (confirm('是否立即切换到新设置的默认分类？')) {
            // 清除上次选择的分类记录并立即应用默认分类
            localStorage.removeItem('lastSelectedCategory');
            applyDefaultCategory(selectedCategory);
        }
    });
}

// 应用默认分类
function applyDefaultCategory(category) {
    // 更新当前分类
    currentCategory = category;
    
    // 更新分类按钮状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        // 使用数据属性获取分类名称
        const btnCategory = btn.dataset.category;
        
        if (btnCategory === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 更新显示的网站
    if (category === userCustomCategoryName) {
        // 显示自定义分类的网站
        displayWebsites(userCustomSites);
    } else {
        const filteredSites = websites.filter(website => website.category === category);
        displayWebsites(filteredSites);
    }
}

// 壁纸设置功能
function setupWallpaper() {
    const wallpaperBtn = document.getElementById('wallpaper-btn');
    const modal = document.getElementById('wallpaper-modal');
    const closeBtn = document.getElementById('close-wallpaper-modal');
    const fileInput = document.getElementById('wallpaper-file');
    const fileInputBtn = document.querySelector('.file-input-btn');
    const fileName = document.getElementById('file-name');
    const wallpaperPreview = document.getElementById('wallpaper-preview');
    const opacitySlider = document.getElementById('wallpaper-opacity');
    const opacityValue = document.getElementById('opacity-value');
    const applyBtn = document.getElementById('apply-wallpaper');
    const removeBtn = document.getElementById('remove-wallpaper');
    
    let currentWallpaper = null;
    let currentOpacity = 30;
    
    // 初始化设置
    function initSettings() {
        // 从本地存储加载壁纸设置
        const savedWallpaper = localStorage.getItem('wallpaper');
        const savedOpacity = localStorage.getItem('wallpaperOpacity');
        
        if (savedWallpaper) {
            currentWallpaper = savedWallpaper;
            applyWallpaperToPage(currentWallpaper, savedOpacity || currentOpacity);
        }
        
        if (savedOpacity) {
            currentOpacity = parseInt(savedOpacity);
            opacitySlider.value = currentOpacity;
            opacityValue.textContent = `${currentOpacity}%`;
        }
    }
    
    // 打开模态窗口
    wallpaperBtn.addEventListener('click', () => {
        // 重置预览
        resetPreview();
        
        // 如果有已保存的壁纸，展示在预览区域
        if (currentWallpaper) {
            wallpaperPreview.style.backgroundImage = `url(${currentWallpaper})`;
            wallpaperPreview.classList.add('has-image');
        }
        
        modal.classList.add('active');
    });
    
    // 关闭模态窗口
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // 点击模态窗口外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // 点击文件选择按钮
    fileInputBtn.addEventListener('click', () => {
        fileInput.click();
    });
    
    // 文件选择变化
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // 显示文件名
            fileName.textContent = file.name;
            
            // 预览图片
            const reader = new FileReader();
            reader.onload = function(event) {
                wallpaperPreview.style.backgroundImage = `url(${event.target.result})`;
                wallpaperPreview.classList.add('has-image');
                currentWallpaper = event.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            resetPreview();
        }
    });
    
    // 重置预览
    function resetPreview() {
        fileName.textContent = '未选择文件';
        wallpaperPreview.style.backgroundImage = '';
        wallpaperPreview.classList.remove('has-image');
    }
    
    // 透明度滑块变化
    opacitySlider.addEventListener('input', (e) => {
        currentOpacity = e.target.value;
        opacityValue.textContent = `${currentOpacity}%`;
        
        // 实时更新预览区域的透明度
        if (wallpaperPreview.classList.contains('has-image')) {
            wallpaperPreview.style.opacity = currentOpacity / 100;
        }
    });
    
    // 应用壁纸
    applyBtn.addEventListener('click', () => {
        if (currentWallpaper) {
            // 保存设置到本地存储
            localStorage.setItem('wallpaper', currentWallpaper);
            localStorage.setItem('wallpaperOpacity', currentOpacity);
            
            // 应用壁纸到页面
            applyWallpaperToPage(currentWallpaper, currentOpacity);
            
            // 关闭模态窗口
            modal.classList.remove('active');
            
            // 显示成功提示
            alert('壁纸设置已应用！');
        } else {
            alert('请先选择一张图片作为壁纸');
        }
    });
    
    // 移除壁纸
    removeBtn.addEventListener('click', () => {
        // 清除本地存储
        localStorage.removeItem('wallpaper');
        localStorage.removeItem('wallpaperOpacity');
        
        // 移除页面壁纸
        removeWallpaperFromPage();
        
        // 重置预览
        resetPreview();
        currentWallpaper = null;
        
        // 关闭模态窗口
        modal.classList.remove('active');
        
        // 显示成功提示
        alert('壁纸已移除！');
    });
    
    // 从页面移除壁纸
    function removeWallpaperFromPage() {
        const wallpaperElement = document.querySelector('.wallpaper-background');
        if (wallpaperElement) {
            document.body.removeChild(wallpaperElement);
        }
    }
    
    // 初始化
    initSettings();
}

// 添加右键菜单的"添加到自定义分类"事件处理
function setupContextMenu() {
    const contextMenu = document.getElementById('context-menu');
    
    // 检查是否已存在添加到自定义分类的选项
    if (!document.getElementById('add-to-custom')) {
        // 添加新的菜单项
        const addToCustomItem = document.createElement('div');
        addToCustomItem.id = 'add-to-custom';
        addToCustomItem.className = 'context-menu-item add-to-custom';
        addToCustomItem.innerHTML = `
            <i class="ri-star-line"></i>
            <span>添加到"${userCustomCategoryName}"</span>
        `;
        
        // 插入到编辑和删除之间
        const editItem = document.getElementById('edit-website');
        contextMenu.insertBefore(addToCustomItem, editItem.nextSibling);
        
        // 添加点击事件
        addToCustomItem.addEventListener('click', function() {
            const websiteData = JSON.parse(contextMenu.dataset.websiteData);
            
            if (websiteData) {
                const result = addToUserCustom(websiteData);
                
                if (result) {
                    contextMenu.style.display = 'none';
                    alert(`已添加到"${userCustomCategoryName}"分类！`);
                    
                    // 如果当前正在查看该分类，更新显示
                    if (currentCategory === userCustomCategoryName) {
                        displayWebsites(userCustomSites);
                    }
                } else {
                    alert(`"${websiteData.name}"已存在于"${userCustomCategoryName}"分类中！`);
                    contextMenu.style.display = 'none';
                }
            }
        });
    } else {
        // 更新现有菜单项的文本
        document.querySelector('#add-to-custom span').textContent = `添加到"${userCustomCategoryName}"`;
    }
}

// 添加右键菜单的删除事件处理
document.getElementById('delete-website').addEventListener('click', function() {
    const contextMenu = document.getElementById('context-menu');
    const websiteData = JSON.parse(contextMenu.dataset.websiteData);
    
    if (websiteData && confirm('确定要删除这个网站吗？')) {
        deleteUserWebsite(websiteData);
        contextMenu.style.display = 'none';
    }
});

// 点击ESC键关闭右键菜单
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('context-menu').style.display = 'none';
    }
});

// 添加编辑网站的事件处理
document.getElementById('edit-website').addEventListener('click', function() {
    const contextMenu = document.getElementById('context-menu');
    const websiteData = JSON.parse(contextMenu.dataset.websiteData);
    
    // 打开添加网站的模态窗口
    const modal = document.getElementById('add-website-modal');
    const form = document.getElementById('add-website-form');
    const nameInput = document.getElementById('website-name');
    const urlInput = document.getElementById('website-url');
    const descInput = document.getElementById('website-description');
    const categorySelect = document.getElementById('website-category');
    
    // 填充表单数据
    nameInput.value = websiteData.name;
    urlInput.value = websiteData.url;
    descInput.value = websiteData.description;
    
    // 确保分类选项存在
    let categoryExists = false;
    for (let i = 0; i < categorySelect.options.length; i++) {
        if (categorySelect.options[i].value === websiteData.category) {
            categorySelect.selectedIndex = i;
            categoryExists = true;
            break;
        }
    }
    
    // 如果分类不存在，添加到选项中
    if (!categoryExists && websiteData.category) {
        const option = document.createElement('option');
        option.value = websiteData.category;
        option.textContent = websiteData.category;
        categorySelect.insertBefore(option, categorySelect.firstChild);
        categorySelect.value = websiteData.category;
    }
    
    // 修改表单提交行为
    form.onsubmit = function(e) {
        e.preventDefault();
        
        // 更新网站数据
        const updatedWebsite = {
            name: nameInput.value.trim(),
            url: urlInput.value.trim(),
            description: descInput.value.trim(),
            category: categorySelect.value,
            icon: websiteData.icon,
            isCustom: true
        };
        
        // 从网站列表中移除旧数据
        websites = websites.filter(site => 
            !(site.name === websiteData.name && 
              site.url === websiteData.url)
        );
        
        // 添加更新后的数据
        websites.push(updatedWebsite);
        
        // 更新本地存储
        let userWebsites = localStorage.getItem('userWebsites');
        let savedWebsites = [];
        if (userWebsites) {
            savedWebsites = JSON.parse(userWebsites);
            savedWebsites = savedWebsites.filter(site => 
                !(site.name === websiteData.name && 
                  site.url === websiteData.url)
            );
        }
        savedWebsites.push(updatedWebsite);
        localStorage.setItem('userWebsites', JSON.stringify(savedWebsites));
        
        // 关闭模态窗口
        modal.classList.remove('active');
        
        // 重新生成分类导航和显示网站
        rebuildCategoryNav();
        if (currentCategory === userCustomCategoryName) {
            displayWebsites(userCustomSites);
        } else {
            const filteredSites = websites.filter(site => site.category === currentCategory);
            displayWebsites(filteredSites);
        }
        
        // 显示成功提示
        alert('网站信息已更新！');
        
        // 重置表单提交行为
        form.onsubmit = null;
    };
    
    // 显示模态窗口
    modal.classList.add('active');
    contextMenu.style.display = 'none';
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadUserWebsites(); // 加载用户自定义网站
    loadUserCustomCategory(); // 加载用户自定义分类
    setupThemeToggle();
    setupDailyQuote();
    
    // 确定当前应该使用的分类
    let activeCategory;
    
    // 检查是否存在sessionStorage（用于判断是刷新还是新会话）
    // sessionStorage在浏览器关闭后会被清除，所以这是检测新会话的可靠方法
    if (!sessionStorage.getItem('navigationSession')) {
        console.log('新会话: 使用默认分类');
        // 新会话（浏览器重启）- 使用设置的默认分类
        activeCategory = localStorage.getItem('defaultCategory') || userCustomCategoryName;
        
        // 调试信息
        console.log('默认分类:', activeCategory);
    } else {
        console.log('刷新页面: 保持当前分类');
        // 刷新页面 - 使用上次选择的分类
        let lastCategory = localStorage.getItem('lastSelectedCategory');
        
        // 调试信息
        console.log('上次选择的分类:', lastCategory);
        
        activeCategory = lastCategory || 
                         localStorage.getItem('defaultCategory') || 
                         userCustomCategoryName;
    }
    
    // 设置会话标记，表示用户已经访问过页面
    sessionStorage.setItem('navigationSession', 'active');
    
    // 确保当前分类存在，避免因分类不存在而导致显示问题
    const allCategories = [userCustomCategoryName, ...new Set(websites.map(website => website.category))];
    if (!allCategories.includes(activeCategory)) {
        activeCategory = userCustomCategoryName;
    }
    
    // 设置当前分类
    currentCategory = activeCategory;
    console.log('最终使用的分类:', currentCategory);
    
    // 生成分类导航
    generateCategoryNav();
    setupContextMenu(); // 设置右键菜单
    
    // 再次检查高亮状态是否正确
    setTimeout(() => {
        // 确保分类按钮正确高亮
        document.querySelectorAll('.category-btn').forEach(btn => {
            // 使用数据属性获取分类名称
            const btnCategory = btn.dataset.category;
            
            if (btnCategory === currentCategory) {
                if (!btn.classList.contains('active')) {
                    console.log('修正分类按钮高亮:', btnCategory);
                    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            }
        });
    }, 100);
    
    // 显示当前分类的网站
    if (currentCategory === userCustomCategoryName) {
        // 显示自定义分类网站列表
        displayWebsites(userCustomSites);
    } else {
        const filteredSites = websites.filter(website => website.category === currentCategory);
        displayWebsites(filteredSites);
    }
    
    // 设置默认壁纸（如果本地没有保存壁纸）
    if (!localStorage.getItem('wallpaper')) {
        // 默认使用当前目录下的background.jpg作为背景
        const defaultWallpaper = "background.jpg";
        
        // 保存到本地存储
        localStorage.setItem('wallpaper', defaultWallpaper);
        localStorage.setItem('wallpaperOpacity', '100'); // 100%透明度
        
        // 将壁纸应用到页面
        applyWallpaperToPage(defaultWallpaper, 100);
    }
    
    setupSearch();
    setupAddWebsite(); // 设置添加网站功能
    setupDefaultCategory(); // 设置默认分类功能
    setupWallpaper(); // 设置壁纸功能
    
    // 设置编辑自定义分类模态窗口事件
    setupEditCategoryModalEvents();
    
    // 添加页面加载完成的动画效果
    document.body.classList.add('loaded');
});

// 设置编辑自定义分类模态窗口事件
function setupEditCategoryModalEvents() {
    // 关闭模态窗口按钮
    const closeBtn = document.getElementById('close-edit-category-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('edit-category-modal').classList.remove('active');
        });
    }
    
    // 点击模态窗口外部关闭
    const modal = document.getElementById('edit-category-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // 保存自定义分类
    const saveBtn = document.getElementById('save-custom-category');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const newName = document.getElementById('custom-category-name').value.trim();
            
            if (newName) {
                // 更新自定义分类名称
                const oldName = userCustomCategoryName;
                userCustomCategoryName = newName;
                localStorage.setItem('userCustomCategoryName', userCustomCategoryName);
                
                // 如果是当前选中的分类，需要更新导航
                if (currentCategory === oldName) {
                    currentCategory = newName;
                }
                
                // 保存自定义网站
                saveUserCustomCategory();
                
                // 重新生成分类导航
                generateCategoryNav();
                
                // 如果当前正在查看该分类，更新显示
                if (currentCategory === newName) {
                    displayWebsites(userCustomSites);
                }
                
                // 关闭模态窗口
                modal.classList.remove('active');
                
                // 显示成功提示
                alert('自定义分类设置已保存！');
            } else {
                alert('分类名称不能为空！');
            }
        });
    }
    
    // 排序按钮点击事件
    const sortBtn = document.getElementById('sort-sites-btn');
    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            const currentSort = this.querySelector('span').textContent;
            
            if (currentSort.includes('最近添加优先')) {
                // 切换到按名称排序
                userCustomSites.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
                this.querySelector('span').textContent = '按名称排序';
            } else {
                // 切换到最近添加优先
                userCustomSites.sort((a, b) => {
                    if (a.addTime && b.addTime) {
                        return new Date(b.addTime) - new Date(a.addTime);
                    }
                    return 0;
                });
                this.querySelector('span').textContent = '最近添加优先';
            }
            
            // 保存并刷新列表
            saveUserCustomCategory();
            openEditCustomCategoryModal();
            
            // 如果当前正在查看该分类，更新主页面显示
            if (currentCategory === userCustomCategoryName) {
                displayWebsites(userCustomSites);
            }
        });
    }
}

// 将壁纸应用到页面（使其在初始化之外也可访问）
function applyWallpaperToPage(wallpaperUrl, opacity) {
    // 检查是否已存在壁纸元素
    let wallpaperElement = document.querySelector('.wallpaper-background');
    
    if (!wallpaperElement) {
        // 创建壁纸背景元素
        wallpaperElement = document.createElement('div');
        wallpaperElement.className = 'wallpaper-background';
        document.body.appendChild(wallpaperElement);
    }
    
    // 设置壁纸
    wallpaperElement.style.backgroundImage = `url(${wallpaperUrl})`;
    wallpaperElement.style.opacity = opacity / 100;
}

// 显示引用内容
function displayQuote(quote) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteContainer = document.querySelector('.daily-quote');

    // 添加动画效果
    quoteContainer.classList.add('quote-changing');
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '';
        quoteContainer.classList.remove('quote-changing');
    }, 300);
}

// 设置每日一言功能
function setupDailyQuote() {
    const refreshBtn = document.getElementById('refresh-quote');
    
    // 初始获取名言
    getQuote();
    
    // 点击刷新按钮获取新的一言
    refreshBtn.addEventListener('click', getQuote);
} 