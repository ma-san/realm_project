import Realm from 'realm';

const keyPreference = "Preference";

const Preference = {
    name: keyPreference,
    primaryKey: 'id', // プライマリキーを指定
    properties: {
        id: 'int', // プライマリキーとして扱う (int型)
        title: 'string' // 任意のプロパティ (string型)
    }
};

const realmPreference = () => {
    const realm = new Realm({
        schema: [Preference] // スキーマを設定
    });
    return realm;
};

export const read = (id) => {
    const realm = realmPreference();
    // idのレコードを取得
    const obj = realm.objects(keyPreference).filtered("id = " + id);
    return obj[0].title;
};

export const write = (id, title) => {
    const realm = realmPreference();
    // レコードをアップデート
    realm.write(() => {
        realm.create(keyPreference, {
            id: id,
            title: title
        }, true);
    });
};