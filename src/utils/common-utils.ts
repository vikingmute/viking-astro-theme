import pinyin from 'tiny-pinyin';

export function slugify(input?: string) {
    if (!input) return '';

    // 检测是否包含中文字符
    const hasChinese = /[\u4e00-\u9fa5]/.test(input);

    if (hasChinese) {
        // 转换为拼音，并用连字符连接
        return pinyin.convertToPinyin(input, '-', true)  // 将第二个参数改为 '-'
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')     // 将空格替换为连字符
            .replace(/[^a-z0-9-]/g, '') // 只保留字母、数字和连字符
            .replace(/-+/g, '-')      // 将多个连字符替换为单个
            .replace(/^-+|-+$/g, ''); // 移除首尾的连字符
    }

    // 非中文按原来的逻辑处理
    var slug = input.toLowerCase().trim();
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
