import pinyin from 'tiny-pinyin';

export function slugify(input?: string) {
    if (!input) return 'undefined-tag';

    // 检测是否包含非ASCII字符
    const hasNonAscii = /[^\x00-\x7F]/.test(input);

    if (hasNonAscii) {
        // 检测是否为中文
        const hasChinese = /[\u4e00-\u9fa5]/.test(input);

        if (hasChinese) {
            // 中文使用 tiny-pinyin 转换
            const pinyinSlug = pinyin.convertToPinyin(input, '-', true)
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '')
                .replace(/-+/g, '-')
                .replace(/^-+|-+$/g, '');

            return pinyinSlug || Buffer.from(input).toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '')
                .substring(0, 40);
        } else {
            // 对于非中文的非ASCII字符，直接使用base64编码
            const encoded = Buffer.from(input).toString('base64')
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=/g, '');

            return encoded.substring(0, 40); // 限制长度
        }
    }

    // ASCII字符使用标准处理
    var slug = input.toLowerCase().trim();
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    slug = slug.replace(/[\s-]+/g, '-');

    return slug || `tag-${Date.now().toString(36)}`;
}

/**
 * 将网站语言代码转换为 Giscus 支持的语言代码
 * @param locale 网站语言代码 (如 'en-US', 'zh-CN', 'ja-JP')
 * @returns Giscus 支持的语言代码
 */
export function getGiscusLang(locale: string): string {
    // 中文是特殊情况，需要保留区域标识
    if (locale.startsWith('zh-')) {
        return locale; // 保留完整的 'zh-CN' 或 'zh-TW'
    }

    // 对于其他语言，只使用主语言代码
    return locale.split('-')[0]; // 'en-US' -> 'en', 'ja-JP' -> 'ja'
}